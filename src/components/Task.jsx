import React from "react";

const Task = ({ name }) => {
  return (
    <div className="basis-4/5 h-fit overflow-y-auto  border-slate-700 border rounded-md flex items-center p-4 my-2">
      <p className="font-bold">{name}</p>
    </div>
  );
};

export default Task;
