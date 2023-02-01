import React from "react";
import Task from "./Task";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useFetchAllTasks from "../hooks/useFetchAllTasks";

const Tasks = () => {
  useFetchAllTasks();
  const tasks = useSelector(state => state.tasks)

  

  console.log('Store', useSelector(state => state.tasks))
//   console.log("These are the tasks", tasks[1].text )

  return (
    <div className="mt-[20px]">
      {tasks.length > 0 ?
        tasks.map((task) => (
          <Task id={task.id} task={task.text} reminder={task.reminder} time={task.day} key={task.id} />
        )) : 'No Tasks To Show'}
    </div>
  );
};

export default Tasks;
