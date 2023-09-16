import React from 'react'

export const ShowTask = () => {
    const tasks = [
    {id:10100, name:"Task A", time:"1:02:01 AM 9/13/2023"},
    {id:10102, name:"Task B", time:"1:07:01 AM 9/13/2023"},
    {id:10104, name:"Task C", time:"1:09:01 AM 9/13/2023"}
]
  return (
    <section className="showTask">
        <div className="head">
            <div>
                <span className="title">Todo</span>
                <span className="count">0</span>
            </div>
            <button className='clearAll'>Clear ALL</button>

        </div>

        <ul>
            {tasks.map((task) => (
            <li>
            <p>
                <span className="name">{task.name}</span>
                <span className="time">{task.time}</span>
            </p>
            <i className="bi bi-pencil-fill"></i>
            <i className="bi bi-trash"></i>
        </li>
            
            ) )}
            
        </ul>
    </section>
  )
}
