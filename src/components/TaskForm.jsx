import { useState } from 'react';

function TaskForm({ onAddTask }) {
  // Estado local para controlar lo que el usuario escribe en el input
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue al enviar el form
    
    // Validación: no permitir tareas vacías o solo con espacios
    if (text.trim() === '') return;

    onAddTask(text.trim()); // Envía el texto limpio al componente padre (App)
    setText(''); // Limpia el campo de texto después de agregar
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribe una nueva tarea..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default TaskForm;