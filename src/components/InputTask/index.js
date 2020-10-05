import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

import { addTask } from '../../store/actions/tasks'
import './index.scss'

const InputTask = () => {
    const dispatch = useDispatch()
    const [task, setTask] = useState(null)
    const [show, setShow] = useState(false)

    const onChange = () => {
        if(task) {
            const newTask = {
                title: task,
                date: Date.now(),
                status: false
            }
            dispatch(addTask(newTask))
            setTask('')
            setShow(false)
        }
        else {
            setShow(true)
        }
    }

    return(
        <div className='input-task'>
            <Alert show={show} variant='danger'>
                Заполните поле задачи!
            </Alert>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Введите задачу"
                    aria-label="Введите задачу"
                    aria-describedby="basic-addon2"
                    value={task}
                    onChange={e => setTask(e.target.value)}
                />
                <InputGroup.Append>
                    <Button
                        variant="outline-secondary"
                        onClick={() => onChange()}
                    >
                        Добавить задачу
                    </Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    )
}

export default InputTask
