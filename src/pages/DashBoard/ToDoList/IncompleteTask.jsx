import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const IncompleteTask = ({ incompleteTasks, handleDelete }) => {
  return (
    <div>
      <h2 className="text-3xl text-center font-bold mb-4">
        <button className="btn uppercase font-medium text-blue-600 ">
          Incomplete
          <div className="badge badge-primary">{incompleteTasks.length}</div>
        </button>
      </h2>
      <div className="grid gap-5">
        {incompleteTasks &&
          incompleteTasks.map((task) => (
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
              <h2 className="text-xl font-semibold mb-2 uppercase">
                {task?.priority}
              </h2>
              <p className="text-sm font-medium mb-2 ">{task?.deadline}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default IncompleteTask;
