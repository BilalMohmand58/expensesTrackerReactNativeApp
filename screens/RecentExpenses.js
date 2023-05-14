import React, { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput";
import Error from "../components/UI/Error";
import Loading from "../components/UI/Loading";
import { ExpenseContext } from "../context/Expense-Context";
import { getDateMinusDays } from "../utils/date";
import { fetchExpenses } from "../utils/http";

function RecentExpenses() {
  const expensesCtx = useContext(ExpenseContext);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      try {
        const expenses = await fetchExpenses();
        expensesCtx.setExpenses(expenses);
      } catch (error) {
        setError("Could not fetch expenses!");
      }

      setIsFetching(false);
    }
    getExpenses();
  }, []);

  function errorHandler() {
    setError(null);
  }

  if (error && !isFetching) {
    return <Error message={error} onConfirm={errorHandler} />;
  }

  if (isFetching) {
    return <Loading />;
  }
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const dateWeekAgo = getDateMinusDays(today, 7);

    return expense.date >= dateWeekAgo;
  });
  return (
    <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 days" />
  );
}

export default RecentExpenses;
