import React from 'react'

import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

import './index.scss'

const InputTask = () => {
    return(
        <div className='input-task'>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Введите задачу"
                    aria-label="Введите задачу"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary">Добавить задачу</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    )
}

export default InputTask