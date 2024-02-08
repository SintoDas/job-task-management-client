import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllTask = ({ task, handleCompleted, handleDelete }) => {
  return (
    <div key={task._id} className="bg-white p-4 rounded-lg shadow-md relative">
      <div className="absolute top-2 right-2 flex space-x-2">
        <Link to={`/updateItem/${task._id}`}>
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
        <h2 className="text-xl font-semibold mb-2 uppercase">
          {task?.priority}
        </h2>
        <p className="text-sm font-medium mb-2">{task?.deadline}</p>
        <div>
          <button
            onClick={() => handleCompleted(task)}
            className={`btn cursor-pointer ${
              task.completed ? "text-green-500" : "text-blue-500"
            }`}
            disabled={task.completed}
          >
            {task.completed ? "Completed" : "Incomplete"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllTask;
