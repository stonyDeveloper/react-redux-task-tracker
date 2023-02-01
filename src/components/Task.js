import React from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteTask, loading } from "../redux/task/taskActions";
import axios from "axios";

const Task = ({task, time, reminder, id}) => {
  const dispatch = useDispatch()
  const handleDeleteTask = async (id) => {
    dispatch(loading())
    const res = await axios.delete(`https://637a6229702b9830b9ed4bb8.mockapi.io/tasks/${id}`)
    console.log(res)
    dispatch(deleteTask(id))
    dispatch(loading())
  }

  return (
    <div className={`px-[20px] bg-[white] text-[black] py-[10px] border-l-4  mt-[15px] ${reminder == true ? 'border-[green]' : 'border-white'}`}>
      <div className="flex items-center justify-between ">
        <p className="text-[15px]">{task}</p>
        <FaTimes style={{ color: "red", cursor: "pointer" }} onClick={() => handleDeleteTask(id)}/>
      </div>
      <p className="text-left text-[15px] mt-[7px]">{time}</p>
    </div>
  );
};

export default Task;
