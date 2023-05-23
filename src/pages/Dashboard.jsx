import React, { useState } from "react";
import Task from "../components/Task";

const Dashboard = () => {
  const [tasks, setTasks] = useState([
    {
      name: "Buy Groceries",
    },
    {
      name: "Go to Gym",
    },
    {
      name: "Buy Groceries",
    },
    {
      name: "Water the plants",
    },
    {
      name: "Read Books",
    },
  ]);

  const [taskText, setTaskText] = useState("");

  const addTaskHandler = () => {
    if (taskText === "") {
      alert("Please enter a value!");
      return;
    }

    setTasks((prev) => [
      {
        name: taskText,
      },
      ...prev,
    ]);
    setTaskText("");
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-full h-[90%] overflow-y-auto	flex items-start flex-wrap justify-around gap-2 pt-4">
        {Array.isArray(tasks) && tasks.length > 0 ? (
          tasks.map((task) => <Task name={task.name} />)
        ) : (
          <p className="font-bold text-center"></p>
        )}
      </div>

      <div className="w-full h-[10%] border-t border-t-slate-400	flex items-center justify-center gap-4">
        <div className="basis-[85%]">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />
        </div>

        <div className="basis-[10%]">
          <button
            onClick={addTaskHandler}
            className="btn btn-outline btn-success"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
