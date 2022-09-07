import { useState } from 'react';

// custom hooks
import useLocalStorage from './hooks/useLocalStorage';

// custom components
import CustomForm from './components/CustomForm';
import EditForm from './components/EditForm';
import Tasklist from './components/Tasklist';

function App() {
  const [tasks, setTasks] = useLocalStorage('react-todo-tasks', []);
  const [editedTask, setEditedTasks] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [previousFocusEL, setPreviousFocusEL] = useState(null);
  
  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
  }

  const deleteTask = (id) => {
    setTasks(prevState => prevState.filter(t => t.id !== id));
  }

  const toggleTask = (id) => {
    setTasks(prevState => prevState.map(t => (
        t.id === id ? {...t, checked: !t.checked} : t
      )))
  }

  const updateTask = (task) => {
    setTasks(prevState => prevState.map(t => (
        t.id === task.id ? {...t, name: task.name} : t
      )))
      closeEditMode();
  }

  const closeEditMode = () => {
    setIsEditing(false);
    previousFocusEL.focus()
  }

  const enterEditMode = (task) => {
    setEditedTasks(task);
    setIsEditing(true);
    setPreviousFocusEL(document.activeElement);
  }

  return (
    <div className="container">
      <header>
        <h1>Todoish</h1>
      </header>
      { isEditing && (
        <EditForm 
          editedTask={editedTask}
          updateTask={updateTask}
          closeEditMode= {closeEditMode}
        />
      )}
      <CustomForm addTask={addTask}/>
      { tasks && (
        <Tasklist
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          enterEditMode={enterEditMode}
        />
      )}
    </div>
  )
}

export default App
