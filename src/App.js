import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { ShowTask } from './components/ShowTask';
function App() {

  const [taskList, setTaskList] = useState( JSON.parse(localStorage.getItem('taskList')) || []);
  // perfom a specific task for a specific element
  const [task, setTask] = useState({});

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList))
  }, [taskList]);
  return (
    <div >
      <Header/>
      <AddTask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask}/>
      <ShowTask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask}/>

    </div>
  );
}

export default App;
