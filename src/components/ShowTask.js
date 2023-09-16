import React from 'react'

export const ShowTask = ({taskList, setTaskList, task, setTask}) => {
 const handleEdit = (id) => {
    const selectedTask = taskList.find(todo => todo.id === id);
    setTask(selectedTask)
 }
 
 const handleDelete = (id) => {
    const updatedTaskList = taskList.filter(todo => todo.id !== id);
    setTaskList(updatedTaskList); 
 }

  return (
    <section className="showTask">
        <div className="head">
            <div>
                <span className="title">Todo</span>
                <span className="count">{taskList.length}</span>
            </div>
            <button className='clearAll' onClick={() => setTaskList([])}>Clear ALL</button>

        </div>

        <ul>
            {taskList.map((todo) => (
            <li key={todo.id}>
            <p>
                <span className="name">{todo.name}</span>
                <span className="time">{todo.time}</span>
            </p>
            <i className="bi bi-pencil-fill" onClick={() => handleEdit(todo.id)}></i>
            <i className="bi bi-trash" onClick={() => handleDelete(todo.id)}></i>
        </li>
            
            ) )}
            
        </ul>
    </section>
  )
}
