import axios from "axios";

const FireBase_URL =
  "https://expensetrackerrn-2c9df-default-rtdb.firebaseio.com";

export async function storeExpense(expenseData) {
  const response = await axios.post(
    FireBase_URL + "/expenses.json",
    expenseData
  );
  const id = response.data.name;
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(FireBase_URL + "/expenses.json");
  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };

    expenses.push(expenseObj);
  }
  return expenses;
}

export function updateExpense(id, expenseData) {
  return axios.put(FireBase_URL + `/expenses/${id}.json`, expenseData);
}

export function deleteExpense(id) {
  return axios.delete(FireBase_URL + `/expenses/${id}.json`);
}
