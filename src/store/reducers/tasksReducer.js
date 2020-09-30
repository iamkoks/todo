import { GET_TASKS } from "../types/tasks"

const initState = {
    tasks: [
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
    ],
}

export const tasksReducer = (state = initState, action) => {
    switch(action.type){
        case GET_TASKS:
            return state
        default: return state
    }
}