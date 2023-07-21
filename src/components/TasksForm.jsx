import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../Slices/TaskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";


export const TasksForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector (state => state.tasks);


  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      dispatch(editTask(task))
    }else{
      dispatch(addTask({
        ...task,
        id: uuid(),
      }));
    }
    navigate('/')//una vez termines de ejecutar la funcion lo vas a enviar a la ruta principal.
  };

  useEffect (() => {
    if(params.id){
     setTask(tasks.find(task => task.id === params.id));
    }
  }, [params.id, tasks]);

  return (
    //este input no va a servir para ponerle un titulo anuestra tarea.
    <>
      <form onSubmit={handleSubmit} 
      className="bg-zinc-800 max-w-sm p-4">
        <label htmlFor="title" className="block text-xs font-bold">Task</label>
        {/*este input no va a servir para ponerle un titulo anuestra tarea.
      el handleChange va a  */}
        <input
          name="title"
          type="text"
          placeholder="title"
          onChange={handleChange}
          value={task.title}
          className="w-full p-2 rounded-md bg-zinc-600 mb-2"
        />
        <label htmlFor="description" className="block text-xs font-bold">description</label>
        {/*la description de la tarea. */}
        <textarea
          name="description"
          placeholder="description"
          onChange={handleChange}
          value={task.description}
          className="w-full p-2 rounded-md bg-zinc-600 mb-2"
        ></textarea>
        <button className="bg-indigo-600 px-2 py-1">save</button>
      </form>
    </>
  );
};
