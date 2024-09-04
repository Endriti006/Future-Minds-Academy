import React, { useState, useEffect } from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import './App.css';
import './assets/css/fma-general.css';
import './assets/css/fma-responsive.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    filterTasks(filter);
  }, [tasks, filter]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const toggleCompleted = (index) => {
    const newTasks = tasks.map((task, i) => 
      i === index ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(newTasks);
  };

  const updateTask = (index, updatedTask) => {
    const newTasks = tasks.map((task, i) => 
      i === index ? updatedTask : task
    );
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const filterTasks = (filterType) => {
    setFilter(filterType);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const filtered = tasks.filter((task) => {
      const taskDate = new Date(task.date);
      if (filterType === 'yesterday') {
        return taskDate.toDateString() === yesterday.toDateString();
      } else if (filterType === 'today') {
        return taskDate.toDateString() === today.toDateString();
      } else if (filterType === 'tomorrow') {
        return taskDate.toDateString() === tomorrow.toDateString();
      } else {
        return true; // Show all tasks for "All"
      }
    });
    setFilteredTasks(filtered);
  };

  return (
    <div className="App">
      <header className="App-header wrapper-lg">
        <h1 className='row just-center'>To-Do List</h1>
        <div className='row just-between gap-2 row-tablet'>
          <ToDoForm addTask={addTask} />
<<<<<<< HEAD
          <ToDoList tasks={filteredTasks.length ? filteredTasks : tasks} toggleCompleted={toggleCompleted} updateTask={updateTask} deleteTask={deleteTask} filterTasks={filterTasks} />
=======
          <ToDoList tasks={filteredTasks.length ? filteredTasks : tasks} toggleCompleted={toggleCompleted} updateTask={updateTask} filterTasks={filterTasks} />
>>>>>>> 1cdcd8d6361c2ae1a5ddbed8f5e62c24dabb4896
        </div>
      </header>
    </div>
  );
}

export default App;
