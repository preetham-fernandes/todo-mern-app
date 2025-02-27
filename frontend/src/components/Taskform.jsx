import React, { useState, useEffect } from 'react';

function TaskForm({ onAddTask, editTask, onUpdateTask, onCancelEdit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // When editTask changes, update form fields
  useEffect(() => {
    if (editTask) {
      setTitle(editTask.title);
      setDescription(editTask.description || '');
    } else {
      setTitle('');
      setDescription('');
    }
  }, [editTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim()) return;
    
    if (editTask) {
      onUpdateTask(editTask._id, { title, description });
    } else {
      onAddTask({ title, description });
    }
    
    // Clear form
    setTitle('');
    setDescription('');
  };

  return (
    <div className="task-form-container">
      <h2>{editTask ? 'Edit Task' : 'Add New Task'}</h2>
      <form className="task-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description (optional)"
            rows="3"
          />
        </div>
        <div className="form-buttons">
          {editTask && (
            <button 
              type="button" 
              className="cancel-button" 
              onClick={onCancelEdit}
            >
              Cancel
            </button>
          )}
          <button type="submit" className="submit-button">
            {editTask ? 'Update Task' : 'Add Task'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;