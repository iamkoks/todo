import React from 'react'
import InputTask from '../InputTask';
import Tasks from '../Tasks'

import './index.scss'

const Container = () => {
    return(
        <div className="container">
            <InputTask />
            <Tasks/>
        </div>
    )
}

export default Container