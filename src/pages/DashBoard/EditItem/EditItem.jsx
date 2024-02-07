import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const EditItem = () => {
  const { register, handleSubmit } = useForm();
  const { _id, title, description, deadline, priority } = useLoaderData();
  console.log(title, description);
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    // Handle form submission logic here
    const taskItem = {
      title: data.title,
      description: data.description,
      deadline: data.deadline,
      priority: data.priority,
    };
    // now send to secure way
    const res = await axiosPublic.patch(`/tasks/${_id}`, taskItem);
    console.log(res.data);
    if (res.data.modifiedCount > 0) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${data.title} is Updated`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div className="max-w-md mx-auto mt-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-6">Edit Task</h2>

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
            defaultValue={title}
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
            defaultValue={description}
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
            name="deadline"
            {...register("deadline")}
            defaultValue={deadline}
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
            defaultValue={priority}
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
          Update Task
        </button>
      </form>
    </div>
  );
};

export default EditItem;
