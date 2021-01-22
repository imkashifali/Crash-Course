import "./App.css";
import Header from "./components/Header.js";
import Tasks from "./components/Tasks.js";
import AddTask from "./components/AddTask.js";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      text: "Meeting",
      day: "2pm",
      reminder: true,
    },
    {
      id: "2",
      text: "Doctor",
      day: "6pm",
      reminder: true,
    },
    {
      id: "3",
      text: "School",
      day: "7pm",
      reminder: true,
    },
    {
      id: "4",
      text: "Lunch",
      day: "8pm",
      reminder: false,
    },
  ]);
  //Remove
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  //Toggle
  const TogglePlugin = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="App">
      <Header />
      <AddTask />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={TogglePlugin} />
      ) : (
        "No Task"
      )}{" "}
    </div>
  );
}

export default App;
