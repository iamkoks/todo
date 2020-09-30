import React from 'react'

import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

import './index.scss'

const Task = ({title, status}) => {
    return(
       <div className={status ? 'task-done' : 'task'}>
           <ListGroup.Item>
                {title}
                <div>
                   
                </div>
            </ListGroup.Item>
       </div>
    )
}

export default Task