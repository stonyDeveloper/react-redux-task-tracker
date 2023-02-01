import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { loading, addTask } from '../redux/task/taskActions'



const useAddTask = () => {
const dispatch = useDispatch()
  const sendTask = async (task) => {
    console.log(task)
    dispatch(loading())
    const res = await axios.post('https://637a6229702b9830b9ed4bb8.mockapi.io/tasks', task)
    console.log(res)
    dispatch(addTask(res.data))
    dispatch(loading())
  }
  return {sendTask}
  
}

export default useAddTask