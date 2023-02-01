import taskTypes from "./taskTypes";

export const addTasks = (payload) => {
    return {
        type: taskTypes.ADD_TASKS,
        payload: payload
    }
}

export const addTask = (payload) => {
    return {
        type: taskTypes.ADD_TASK,
        payload: payload
    }
}

export const loading = () => {
    return {
        type: taskTypes.LOADING
    }
}

export const deleteTask = (payload) => {
    return {
        type: taskTypes.DELETE_TASK,
        payload: payload
    }
}





