import React from "react";
import IncomeChart from "./Charts/IncomeChart";
import IncomeForm from "./Forms/IncomeForm";
function Income() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <IncomeForm />
        <IncomeChart />
      </div>
    </>
  );
}

export default Income;
