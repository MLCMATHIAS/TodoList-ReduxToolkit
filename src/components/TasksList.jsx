import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../Slices/TaskSlice";
import { Link } from "react-router-dom";

// useDispatch lo uso para enviar algo
// useSelector lo uso para traer algo del estado

export const TasksList = () => {
  //de todo el estado voy a utilizar solo el estado de tasks
  const tasks = useSelector((state) => state.tasks);
  console.log(tasks);
  const dispatch = useDispatch();

  //funcion para borrar una task.
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <>
      <div className="w-4/6">
        <header className="flex justify-between items center py-4">
          <h1>Task {tasks.length}</h1>
          <Link
            to={"/create-task"}
            className="bg-indigo-600 px-2 py-1 rounded-sm text-sm"
          >
            create task
          </Link>
        </header>

        <div className="grid grid.cols-3 gap-4">
          {tasks.map((task) => (
            <div key={task.id} className="bg-neutral-800 p-4 rounded-md">
              <header className="flex justify-between">
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <div className="flex gap-x-2">
                  <Link to={`/edit-task/${task.id}`}
                   className="bg-zinc-600 px-2 py-1 text-xs rounded-md" >Edit</Link>
                  <button onClick={() => handleDelete(task.id)}
                  className="bg-red-500 px-2 py-1 text-xs rounded-md"
                  >delete</button>
                </div>
              </header>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
