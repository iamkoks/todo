import {
    ADD_TASK,
    GET_TASKS,
    SET_TASK
} from "../types/tasks"

const initState = {
    tasks: [
        {
            title: 'Купить хлеб',
            date: 1601883625000,
            status: false
        },
        {
            title: 'Купить молоко',
            date: 1601887225000,
            status: true
        },
        {
            title: 'Купить сахар',
            date: 1601890825000,
            status: false
        }
    ],
}

export const tasksReducer = (state = initState, action) => {
    switch(action.type){
        case GET_TASKS:
            return state
        case ADD_TASK:
            const newTasks = [...state.tasks, action.payload]
            return {...state, tasks: newTasks}
        case SET_TASK:
            const newCheckTask = state.tasks.map(task => {
                if(+task.date === +action.payload)
                {
                    task.status = !task.status
                }
                return task
            })
            return {...state, tasks: newCheckTask}
        default: return state
    }
}
