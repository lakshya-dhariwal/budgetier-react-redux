import React from "react";
import ExpenseChart from "./Charts/ExpenseChart";
import ExpenseForm from "./Forms/ExpenseForm";
function Expenses() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
      <ExpenseForm />
      <ExpenseChart />
    </div>
  );
}

export default Expenses;
