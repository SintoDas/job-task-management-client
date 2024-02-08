import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import AllTask from "./AllTask";
import CompleteTask from "./CompleteTask";
import IncompleteTask from "./IncompleteTask";
import FilterTask from "../FilterByPriority/FilterTask";
import { useState } from "react";

const ToDoList = () => {
  const axiosPublic = useAxiosPublic();
  const [selectedPriority, setSelectedPriority] = useState("all");
  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosPublic.get("/tasks");
      return res.data;
    },
  });
  const filteredTasks = tasks.filter((task) => {
    if (selectedPriority === "all") {
      return true;
    } else {
      return task.priority === selectedPriority;
    }
  });

  const handleDelete = (task) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/tasks/${task._id}`).then((res) => {
          refetch();
          if (res.data.deletedCount > 0) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `Deleted Successfully`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  };
  // Frontend code
  const handleCompleted = (task) => {
    axiosPublic
      .patch(`/tasks/status/${task._id}`, { completed: true }) // Always mark as completed
      .then((res) => {
        if (res.data) {
          refetch(); // Update UI by refetching tasks
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Task marked as Completed`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        // Handle error
        console.log(error.message);
      });
  };
  return (
    <div>
      <FilterTask
        selectedPriority={selectedPriority}
        setSelectedPriority={setSelectedPriority}
      />
      <div className="container mx-auto p-4 grid gap-8 grid-cols-1 md:grid-cols-1 lg:grid-cols-3 ">
        <div>
          <h2 className="text-3xl text-center font-bold mb-4">
            <button className="btn uppercase font-bold">
              All Task
              <div className="badge badge-secondary">{tasks.length}</div>
            </button>
          </h2>
          <div className="grid gap-5">
            {tasks.map((task) => (
              <AllTask
                key={task._id}
                task={task}
                handleCompleted={handleCompleted}
                handleDelete={handleDelete}
              ></AllTask>
            ))}
          </div>
        </div>

        {/* Complete Section */}
        <CompleteTask
          completedTasks={filteredTasks.filter(
            (task) => task.completed === true
          )}
          handleDelete={handleDelete}
        />
        {/* Incomplete Section */}
        <IncompleteTask
          incompleteTasks={filteredTasks.filter(
            (task) => task.completed !== true
          )}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default ToDoList;
