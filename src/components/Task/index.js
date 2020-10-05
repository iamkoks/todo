import React from 'react'
import { useDispatch } from 'react-redux'
import { setTask } from '../../store/actions/tasks'
import moment from 'moment'
import 'moment/locale/ru'
import './index.scss'

const Task = ({title, date, status}) => {

    const dispatch = useDispatch()
    const getTime = (time) => {
        var ticketTime = moment(time);
        ticketTime.local('ru');
        return ticketTime.format('LLLL')
    }

    const onChangeBox = () => {
        dispatch(setTask(date))
    }
    return(
       <div className={'task'}>
            <div className={status ? 'task__title-done' : 'task__title'}>
                {`Задача: ${title}`}
            </div>
            <div className='task__date'>
                {`${getTime(+date)}`}
            </div>
            <input
                type="checkbox"
                className='task__status'
                onClick={() => onChangeBox()}
                checked={status}
            />
       </div>
    )
}

export default Task
