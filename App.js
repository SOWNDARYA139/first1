import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [showCompleted, setShowCompleted] = useState(false);

  const handleAdd = () => {
    if (!text || !date || !category || !priority) return;
    const newTask = {
      text,
      date,
      category,
      priority,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setText("");
    setDate("");
    setCategory("");
    setPriority("");
  };

  const handleDelete = (index) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
  };

  const handleComplete = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const filteredTasks = tasks.filter(task => task.completed === showCompleted);

  return (
    <div className="App">
      <h1>To-Do List</h1>
<h1>first change</h1>
<h1>second change</h1>
    <h1>Third Change</h1>
      <div className="form">
        <div>
          <label><strong>Task:</strong></label>
         <input
  type="text"
  placeholder="Enter task"
  value={text}
  onChange={(e) => {
    console.log("Task Text:", e.target.value);
    setText(e.target.value);
  }}
/>
        </div>
        <div>
          <label><strong>Date:</strong></label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label><strong>Category:</strong></label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select Category</option>
            <option value="school">School</option>
            <option value="college">College</option>
            <option value="office">Office</option>
            <option value="personal">Personal</option>
          </select>
        </div>
        <div>
          <label><strong>Priority:</strong></label>
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="">Select Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <button onClick={handleAdd}>Add</button>
      </div>

      <div className="toggle-buttons">
        <button
          className={!showCompleted ? "active" : ""}
          onClick={() => setShowCompleted(false)}
        >
          To Do
        </button>
        <button
          className={showCompleted ? "active" : ""}
          onClick={() => setShowCompleted(true)}
        >
          Completed
        </button>
      </div>

      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index} className="task-card">
            <div className="task-content">
              <div className="row">
                <div><strong>Task:</strong> {task.text}</div>
                <div><strong>Due:</strong> {task.date}</div>
              </div>
              <div className="row">
                <div><strong>Category:</strong> {task.category}</div>
                <div><strong>Priority:</strong> {task.priority}</div>
              </div>
            </div>
            <div className="task-icons">
              <span onClick={() => handleDelete(index)} title="Delete">🗑️</span>
              <span onClick={() => handleComplete(index)} title="Mark Completed">✅</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
