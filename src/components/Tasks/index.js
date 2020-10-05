import React from 'react'
import { useSelector } from 'react-redux'
import Task from '../Task'

import './index.scss'

const Tasks = () => {
    const tasks = useSelector(state => state.tasks.tasks)
    return(
       <div className='tasks'>
           <div>
                {tasks?.map((task, index) =>
                    <Task
                        title={task.title}
                        date={task.date}
                        status={task.status}
                        key={index}
                    />
                )}
           </div>
       </div>
    )
}

export default Tasks
