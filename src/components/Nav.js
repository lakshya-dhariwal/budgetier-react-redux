import React from "react";

function Nav() {
  return (
    <div className="bg-custom-purple absolute left-0 min-h-screen w-72">
      <div className="text-bold text-3xl text-center p-2 text-yellow-400 font-medium flex justify-center m-1">
        <img src="logo.svg" alt="logo" width={35} />
        <h1>
          {" "}
          Budget<span className="text-slate-100">tier</span>
        </h1>
      </div>
    </div>
  );
}

export default Nav;
