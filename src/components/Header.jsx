import React from "react";

const Header = () => {
  return (
    <div className=" basis-1/12 border-b-2 border-b-sky-600 navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Task Manager</a>
      </div>
      <div className="flex-none">
        {/* <button className="p-4 w-max btn btn-square btn-ghost">Login</button> */}
      </div>
    </div>
  );
};

export default Header;
