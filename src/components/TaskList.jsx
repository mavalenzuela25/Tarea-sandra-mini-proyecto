import TaskItem from './TaskItem';

function TaskList({ tasks, onToggle, onDelete }) {
  // Mensaje amigable si no hay tareas en la vista actual
  if (tasks.length === 0) {
    return <p className="empty-message">No hay tareas para mostrar aquí.</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id} // Key único obligatorio en React
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TaskList;