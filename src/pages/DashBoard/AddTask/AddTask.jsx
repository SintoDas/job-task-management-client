import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const AddTask = () => {
  const { register, handleSubmit, setValue } = useForm();
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    // Handle form submission logic here
    console.log("Task submitted:", data);
    const taskItem = {
      title: data.title,
      description: data.description,
      deadline: data.deadline,
      priority: data.priority,
    };
    // now send to secure way
    const res = await axiosPublic.post("/task", taskItem);
    console.log(res.data);
    if (res.data.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${data.title} is added to the task`,
        showConfirmButton: false,
        timer: 1500,
      });
    }

    // Clear the form after submission
    setValue("title", "");
    setValue("description", "");
    setValue("deadline", "");
    setValue("priority", "low");
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-6">New Task</h2>

        {/* Title */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-600 font-medium mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            {...register("title", { required: true })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-600 font-medium mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            {...register("description")}
            rows="4"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>

        {/* Deadline */}
        <div className="mb-4">
          <label
            htmlFor="deadline"
            className="block text-gray-600 font-medium mb-2"
          >
            Deadline
          </label>
          <input
            type="date"
            id="deadline"
            defaultValue={new Date()}
            name="deadline"
            {...register("deadline")}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Priority */}
        <div className="mb-4">
          <label
            htmlFor="priority"
            className="block text-gray-600 font-medium mb-2"
          >
            Priority
          </label>
          <select
            id="priority"
            name="priority"
            {...register("priority")}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="low">Low</option>
            <option value="medium">medium</option>
            <option value="high">High</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
