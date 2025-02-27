import React from 'react';
import TaskItem from './Taskitem';

function TaskList({ tasks, onDeleteTask, onToggleStatus, onEditClick }) {
  if (tasks.length === 0) {
    return <div className="no-tasks">No tasks yet. Add one above!</div>;
  }

  return (
    <div className="task-list">
      <h2>Your Tasks</h2>
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onDeleteTask={onDeleteTask}
          onToggleStatus={onToggleStatus}
          onEditClick={onEditClick}
        />
      ))}
    </div>
  );
}

export default TaskList;