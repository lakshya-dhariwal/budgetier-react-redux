import React from "react";
import ExpenseChart from "./Charts/ExpenseChart.js";
import IncomeChart from "./Charts/IncomeChart.js";
function Dashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <ExpenseChart />
      <IncomeChart />
    </div>
  );
}

export default Dashboard;
