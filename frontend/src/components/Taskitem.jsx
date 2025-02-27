import React from 'react';

function TaskItem({ task, onDeleteTask, onToggleStatus, onEditClick }) {
  return (
    <div className={`task-item ${task.status === 'completed' ? 'completed' : ''}`}>
      <div className="task-content">
        <h3 className="task-title">{task.title}</h3>
        {task.description && <p className="task-description">{task.description}</p>}
        <div className="task-meta">
          <span className="task-status">
            Status: {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
          </span>
          <span className="task-date">
            Created: {new Date(task.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>
      <div className="task-actions">
        <button
          className="status-button"
          onClick={() => onToggleStatus(task._id, task.status)}
        >
          {task.status === 'completed' ? 'Mark Pending' : 'Mark Completed'}
        </button>
        <button
          className="edit-button"
          onClick={() => onEditClick(task)}
        >
          Edit
        </button>
        <button
          className="delete-button"
          onClick={() => onDeleteTask(task._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;