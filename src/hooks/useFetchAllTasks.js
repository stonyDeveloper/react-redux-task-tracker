import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import api from "../api";
import axios from "axios";
import { addTasks, loading } from "../redux/task/taskActions";

const useFetchAllTasks = () => {
  const dispatch = useDispatch();
  const fetchTasks = async () => {
    // dispatch(loading())
    const data = await axios.get(
      "https://637a6229702b9830b9ed4bb8.mockapi.io/tasks"
    );
    console.log(data.data, "Data");
    // dispatch(loading())
    return dispatch(addTasks(data.data));
  };

  useEffect(() => {
    fetchTasks();
  }, []);
};

export default useFetchAllTasks;
