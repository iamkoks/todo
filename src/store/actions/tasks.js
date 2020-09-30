import GET_TASKS from "../types/tasks";

export const getFilms = tasks => (
    {
        type: GET_TASKS,
        payload: tasks
    }
)