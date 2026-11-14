import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskFilter from './components/TaskFilter';
import TaskList from './components/TaskList';
import TaskStats from './components/TaskStats';
import './App.css';

function App() {
  // 1. Estado de tareas: intenta cargar desde localStorage; si no hay nada, inicia con una tarea de ejemplo
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('todo_tasks');
    return savedTasks
      ? JSON.parse(savedTasks)
      : [{ id: 1, text: 'Aprender React básico', completed: false }];
  });

  // 2. Estado del filtro actual ('all', 'active', 'completed')
  const [filter, setFilter] = useState('all');

  // Extra: Guarda automáticamente en localStorage cada vez que cambie el array de tareas
  useEffect(() => {
    localStorage.setItem('todo_tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Función obligatoria: Agregar tarea
  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  // Función obligatoria: Alternar completado / pendiente
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Función obligatoria: Eliminar tarea
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Variable derivada: Filtra las tareas según el botón seleccionado
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true; // 'all'
  });

  return (
    <div className="app-container">
      <div className="todo-card">
        <h1>Mini To-Do App</h1>

        <TaskForm onAddTask={addTask} />

        <TaskFilter currentFilter={filter} onFilterChange={setFilter} />

        <TaskList
          tasks={filteredTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />

        <TaskStats tasks={tasks} />
      </div>
    </div>
  );
}

export default App;