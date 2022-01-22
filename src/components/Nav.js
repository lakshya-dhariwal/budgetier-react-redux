import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="bg-custom-purple min-h-full w-fit sm:w-72 text-slate-100">
      <Link to="/">
        <div className="text-bold text-3xl text-center p-2 text-yellosm:w-400 font-medium flex justify-center m-1">
          <img src="logo.svg" alt="logo" width={35} />
          <h1 className="hidden sm:block">
            Budget<span className="text-light-blue">tier</span>
          </h1>
        </div>
      </Link>

      <div className="flex flex-col items-center justify-around h-80">
        <Link to="/">
          <div className="flex items-center justify-around p-2 bg-indigo-300 rounded backdrop-filter backdrop-blur-lg bg-opacity-30 hover:-translate-y-0.5 sm:w-40">
            <img src="dashboard.svg" alt="add funds" width={35} />
            <h2 className="p-2 hidden sm:block">Dashboard</h2>
          </div>
        </Link>
        <Link to="/income">
          <div className="flex items-center justify-around p-2 bg-indigo-300 rounded backdrop-filter backdrop-blur-lg bg-opacity-30 hover:-translate-y-0.5 sm:w-40">
            <img src="add.svg" alt="add funds" width={35} />
            <h2 className="p-2 hidden sm:block">Income</h2>
          </div>
        </Link>
        <Link to="/expenses">
          <div className="flex items-center justify-around p-2 bg-indigo-300 rounded backdrop-filter backdrop-blur-lg bg-opacity-30 hover:-translate-y-0.5 w-fit sm:w-40">
            <img src="remove.svg" alt="remove funds" width={35} />
            <h2 className="p-2 hidden sm:block">Expenses</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
