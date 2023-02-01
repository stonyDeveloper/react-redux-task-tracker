import taskTypes from "./taskTypes";
import initialTasks from "../../Mock/data";
import tasks from "../../Mock/data";

const initialState = {
    tasks: [],
    loading: false
}

const taskReducer = (state = initialState, action) => {
    switch(action.type) {
        case taskTypes.ADD_TASKS:
            return {
               ...state,
                tasks: [...action.payload]
            }
        
        case taskTypes.ADD_TASK:
            return {
              ...state,
              tasks: [...state.tasks, action.payload]
            }

        case taskTypes.LOADING:
            return{
                ...state,
                loading: !state.loading
            }

        case taskTypes.DELETE_TASK:
            return{
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload)
            }
            
            default:
                return state
    }

}


export default taskReducer


