import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput";
import { ExpenseContext } from "../context/Expense-Context";

function AllExpenses() {
  const expensesCtx = useContext(ExpenseContext);

  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod="Total amount"
    />
  );
}

export default AllExpenses;
