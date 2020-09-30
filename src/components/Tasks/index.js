import React, { useState } from 'react'
import Task from '../Task'

import ListGroup from 'react-bootstrap/ListGroup'

import './index.scss'

const Tasks = () => {
    const [tasks, setTasks] = useState([
        {
            title: 'Купить хлеб',
            date: Date.now(),
            status: false
        },
        {
            title: 'Купить молоко',
            date: Date.now(),
            status: true
        },
        {
            title: 'Купить сахар',
            date: Date.now(),
            status: false
        }
    ])
    return(
       <div className='tasks'>
           <ListGroup>
                {tasks.map((task, index) =>
                    <Task
                        title={task.title}
                        status={task.status}
                        key={index}
                    />)}
           </ListGroup>
       </div>
    )
}

export default Tasks