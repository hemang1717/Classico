import "./index.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../Redux/action";
import { IoTrash } from "react-icons/io5";
const Resume = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const addTodos = () => {
    dispatch(addTodo(task));
    setTask("");
  };
  return (
    <div className="todos">
      <h1>Todos</h1>
      <div className="addTodo">
        <input
          type="text"
          value={task}
          placeholder="Enter a todo....."
          className="todoInput"
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="todoButton" onClick={addTodos}>
          Add Todo
        </button>
      </div>

      <div className="tasks">
        {todos?.map((task, ind) => (
          <div className="eachTask" key={ind}>
            <div className="todoHeading">
              <h2>{task}</h2>
            </div>
            <div className="todoDeleteButton">
              <h1><IoTrash/></h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;
