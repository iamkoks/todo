import {
    GET_TASKS,
    ADD_TASK,
    SET_TASK
} from "../types/tasks";

export const getTasks = tasks => (
    {
        type: GET_TASKS,
        payload: tasks
    }
)

export const addTask = task => (
    {
        type: ADD_TASK,
        payload: task
    }
)

export const setTask = date => (
    {
        type: SET_TASK,
        payload: date
    }
)
