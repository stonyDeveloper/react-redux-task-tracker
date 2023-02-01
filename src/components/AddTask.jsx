import React from "react";
import Input from "./Input";
import SubmitBtn from "./SubmitBtn";
import { useState } from "react";
import useAddTask from "../hooks/useAddTask";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addTask, loading } from "../redux/task/taskActions";
import { useSelector } from "react-redux";

const AddTask = () => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);
  const isLoading = useSelector(state => state.loading)

  const dispatch = useDispatch();

  const { sendTask } = useAddTask()

 
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    sendTask({
      text,
      day,
      reminder,
    });
  };

  const handleOnChange = (e) => {
    if (e.target.id === "text") {
      setText(e.target.value);
    }
    if (e.target.id === "day") {
      setDay(e.target.value);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            label="Task"
            placeholder="Enter Task"
            type={"text"}
            value={text}
            id={"text"}
            onChange={handleOnChange}
          />
        </div>

        <div className="mt-[20px]">
          <Input
            label="Day & Time"
            placeholder="Enter Day & Time"
            type={"text"}
            value={day}
            id={"day"}
            onChange={handleOnChange}
          />
        </div>

        <div className="mt-[20px] text-[12px] flex items-center">
          Set Reminder
          <input
            className="w-[20px]"
            type="checkbox"
            value={reminder}
            onChange={(e) => {
              setReminder(e.currentTarget.checked);
            }}
          />
        </div>
        <div className="mt-[30px]">
          <SubmitBtn />
        </div>
      </form>
    </div>
  );
};

export default AddTask;
