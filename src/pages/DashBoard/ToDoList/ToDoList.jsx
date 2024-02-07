import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ToDoList = () => {
  const axiosPublic = useAxiosPublic();
  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosPublic.get("/tasks");
      return res.data;
    },
  });
  const completedTasks = tasks.filter((task) => task.completed === true);
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
    <div className="container mx-auto p-4 grid gap-8 grid-cols-1 md:grid-cols-2  ">
      {/* To Do Section */}
      <div>
        <h2 className="text-3xl text-center font-bold mb-4">
          <button className="btn uppercase">
            To-Do
            <div className="badge badge-primary">{tasks.length}</div>
          </button>
        </h2>
        <div className="grid gap-5">
          {tasks.map((task) => (
            <div
              key={task._id}
              className="bg-white p-4 rounded-lg shadow-md relative"
            >
              <div className="absolute top-2 right-2 flex space-x-2">
                <Link to={`/dashboard/updateItem/${task._id}`}>
                  <FaEdit className="cursor-pointer text-blue-500 hover:text-blue-700" />
                </Link>
                <FaTrash
                  onClick={() => handleDelete(task)}
                  className="cursor-pointer text-red-500 hover:text-red-700"
                />
              </div>
              <h2 className="text-xl font-semibold mb-2">{task?.title}</h2>
              <p className="text-sm font-medium mb-2">{task?.description}</p>
              <div className="flex flex-col md:flex-row justify-between items-center">
                <h2 className="text-xl font-semibold mb-2">{task?.priority}</h2>
                <p className="text-sm font-medium mb-2">{task?.deadline}</p>
                <div>
                  <button
                    onClick={() => handleCompleted(task)}
                    className={`btn cursor-pointer ${
                      task.completed ? "text-green-500" : "text-blue-500"
                    }`}
                    disabled={task.completed}
                  >
                    {task.completed ? "Completed" : "Processing"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Complete Section */}
      <div>
        <h2 className="text-3xl text-center font-bold mb-4">
          <button className="btn uppercase ">
            complete
            <div className="badge badge-primary">{completedTasks.length}</div>
          </button>
        </h2>
        <div className="grid gap-5">
          {completedTasks &&
            completedTasks.map((task) => (
              <div
                key={task._id}
                className="bg-white p-4 rounded-lg shadow-md relative"
              >
                <div className="absolute top-2 right-2 flex space-x-2">
                  <Link to={`/dashboard/updateItem/${task._id}`}>
                    <FaEdit className="cursor-pointer text-blue-500 hover:text-blue-700" />
                  </Link>
                  <FaTrash
                    onClick={() => handleDelete(task)}
                    className="cursor-pointer text-red-500 hover:text-red-700"
                  />
                </div>
                <h2 className="text-xl font-semibold mb-2">{task?.title}</h2>
                <p className="text-sm font-medium mb-2">{task.description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
