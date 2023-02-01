import React from "react";
import bgImg from "../download.jpg";

const AppShell = ({ children, setShowAddtask, showAddTask }) => {
  const handleSetShowAddTask = () => {
    setShowAddtask(!showAddTask);
  };

  return (
    <div className="appshell w-[30rem] bg-white  relative">
      <img className="w-full h-full" src={bgImg} alt="" />
      <div className="transparentBg absolute text-white top-0 w-[30rem]  px-[30px] py-[25px]">
        <div className="flex justify-between items-center">
          <h1 className="font-bold">Task Tracker</h1>
          <button
            onClick={handleSetShowAddTask}
            className="w-[70px] h-[40px] rounded-md"
            style={{ backgroundColor: showAddTask ? "red" : "green" }}
          >
            {showAddTask ? <p>Close</p> : <p>Add</p>}
          </button>
        </div>
        <div className="relative">
          <div className="mt-[10px]">{children}</div>
        </div>

        <div className="mt-[20px]">Copyright © 2023</div>
      </div>
    </div>
  );
};

export default AppShell;
