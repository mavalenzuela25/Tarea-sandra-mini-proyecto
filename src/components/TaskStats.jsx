function TaskStats({ tasks }) {
  // Contamos cuántas tareas tienen completed en false
  const pendingCount = tasks.filter((task) => !task.completed).length;

  return (
    <footer className="task-stats">
      <p>
        Tareas pendientes: <strong>{pendingCount}</strong>
      </p>
    </footer>
  );
}

export default TaskStats;