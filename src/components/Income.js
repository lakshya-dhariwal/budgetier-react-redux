import React from "react";

function Income() {
  return <>
  <div>
    <h1>Income</h1>
    <form
      action="income"
      className=" bg-orange-300 rounded text-slate-50  p-4 m-3 "
    >
      <div className="flex items-center justify-between text-center">
        <label className="text-indigo-800 px-3 m-2" htmlFor="amount">
          Amount
        </label>
        <input
          type="number"
          min="1"
          className=" bg-orange-300 border-2  border-indigo-500 rounded text-indigo-500 p-1 my-2 w-64 h-10"
          required
        />
      </div>
      <div className="flex items-center justify-between text-center">
        <label className="text-indigo-800 px-3 m-2" htmlFor="description">
          Description
        </label>
        <input
          type="text"
          className=" bg-orange-300 border-2  border-indigo-500 rounded text-indigo-500 p-1 my-2 w-64 h-10 "
        />
      </div>
      <div className="flex items-center justify-between text-center">
        <label className="text-indigo-800 px-3 m-2" htmlFor="category">
          Category
        </label>
        <select
          name="category"
          id="category"
          className=" bg-orange-300 border-2  border-indigo-500 rounded text-indigo-500 p-1 my-2 w-64 h-10 "
        >
          <option value="Earned Income">Earned Income</option>
          <option value="Side Hustle">Side Hustle</option>
          <option value="Investments">Investments</option>
          <option value="Passive Income">Passive Income</option>
          <option value="Capital Gains">Capital Gains</option>
          <option value="Loans">Loans</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="flex items-center justify-between text-center">
        <label className="text-indigo-800 px-3 m-2" for="Month and Year">
          Month and Year
        </label>
        <input
          type="month"
          id="Month and Year"
          name="Month and Year"
          required
          className=" bg-orange-300 border-2  border-indigo-500 rounded text-indigo-500 p-1 my-2 w-64 h-10 "
        />
      </div>
      <div className="flex items-center justify-center text-center">
        <button
          type="submit"
          className="bg-indigo-500 p-2 px-6 mt-4 rounded hover:-translate-y-0.5"
        >
          Add
        </button>
      </div>
    </form>
  </div>
</>;
}

export default Income;
