import { useState } from 'react';

// custom components
import CustomForm from './components/CustomForm';
import Tasklist from './components/Tasklist';

function App() {
  const [tasks, setTasks] = useState([]);
  
  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
  }

  return (
    <div className="container">
      <header>
        <h1>Todoish</h1>
      </header>
      <CustomForm addTask={addTask}/>
      { tasks && <Tasklist tasks={tasks} />}
    </div>
  )
}

export default App
