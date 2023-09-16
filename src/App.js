import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { ShowTask } from './components/ShowTask';
function App() {

  const [taskList, setTaskList] = useState([])
  return (
    <div >
      <Header/>
      <AddTask taskList={taskList} setTaskList={setTaskList}/>
      <ShowTask taskList={taskList} setTaskList={setTaskList}/>

    </div>
  );
}

export default App;
