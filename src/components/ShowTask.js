import React from 'react'

export const ShowTask = () => {
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
            <li>
                <p>
                    <span className="name">Task A</span>
                    <span className="time">2020-01-01 12:31:10 am</span>
                </p>
                <i className="bi bi-pencil-fill"></i>
                <i className="bi bi-trash"></i>
            </li>
        </ul>
    </section>
  )
}
