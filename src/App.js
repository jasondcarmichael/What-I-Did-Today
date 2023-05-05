import { useState } from "react";
import { nanoid } from "nanoid";
import Form from "./components/Form";
import Todo from "./components/Todo";
import FilterButtton from "./components/FilterButton";


function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  function addTask(name) {
    const newTask = { id: `win-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }

  const taskList = tasks.map((task) => (
    <Todo 
      id={task.id}
      name={task.name} 
      completed={task.completed} 
      key={task.id}
    />
  ));

  return (
    <div className="todoapp stack-large">
      <h1>What I did today</h1>
      <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
       <FilterButtton />
       <FilterButtton />
       <FilterButtton />
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
          {taskList}
      </ul>
    </div>
  );
}

export default App;
