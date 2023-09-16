import React from 'react'

export const AddTask = ({taskList, setTaskList, task, setTask}) => {
  const handleSubmit = (e) => {
      e.preventDefault();

      if(task.id){
        const date = new Date();
        const updatedTaskList = taskList.map((todo) => (
          todo.id == task.id ? {id: task.id, name: e.target.task.value, time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : { id: todo.id, name: todo.name, time: todo.time} 
        ));
        setTaskList(updatedTaskList)
      }
      else{
      const date = new Date();
      const newTask = {
        id: date.getTime(), 
        name: e.target.task.value, 
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
      }
      setTaskList([...taskList, newTask]);
      e.target.task.value = '';
    }
  }
  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" value={task.name} placeholder="Add Task"  autoComplete='off' onChange = { e => setTask({...task, name: e.target.value})}/>
        <button type="submit">Add</button>
      </form>
    </section>
  )
}
