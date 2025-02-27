import React, { useState, useEffect } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from './services/api';
import TaskForm from './components/Taskform';
import TaskList from './components/Tasklist';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editTask, setEditTask] = useState(null);

  // Fetch all tasks on component mount
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        const data = await getTasks();
        setTasks(data);
      } catch (error) {
        setError('Failed to fetch tasks. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  // Add a new task
  const handleAddTask = async (task) => {
    try {
      const newTask = await createTask(task);
      setTasks([newTask, ...tasks]);
    } catch (error) {
      setError('Failed to add task. Please try again.');
    }
  };

  // Update a task
  const handleUpdateTask = async (id, updatedTask) => {
    try {
      const result = await updateTask(id, updatedTask);
      setTasks(tasks.map(task => task._id === id ? result : task));
      const data = await getTasks();
      setTasks(data);
      setEditTask(null);
    } catch (error) {
      setError('Failed to update task. Please try again.');
    }
  };

  // Delete a task
  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter(task => task._id !== id));
    } catch (error) {
      setError('Failed to delete task. Please try again.');
    }
  };

  // Toggle task status
  const handleToggleStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === 'completed' ? 'pending' : 'completed';
    try {
      const result = await updateTask(id, { status: newStatus });
      setTasks(tasks.map(task => task._id === id ? result : task));
    } catch (error) {
      setError('Failed to update task status. Please try again.');
    }
  };

  // Set task for editing
  const handleEditClick = (task) => {
    setEditTask(task);
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditTask(null);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>MERN Todo App</h1>
      </header>
      <main className="app-main">
        {error && <div className="error-message">{error}</div>}
        <TaskForm 
          onAddTask={handleAddTask} 
          editTask={editTask} 
          onUpdateTask={handleUpdateTask}
          onCancelEdit={handleCancelEdit}
        />
        {loading ? (
          <div className="loading">Loading tasks...</div>
        ) : (
          <TaskList 
            tasks={tasks} 
            onDeleteTask={handleDeleteTask}
            onToggleStatus={handleToggleStatus}
            onEditClick={handleEditClick}
          />
        )}
      </main>
    </div>
  );
}

export default App;