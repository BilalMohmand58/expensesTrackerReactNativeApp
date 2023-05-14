import { StyleSheet, Text, View } from "react-native";

function ExpensesSummary({ expenses, expensesPeriod }) {
  /*
  built in JS method reduce used to sum
  all values in array or obj
  giving resulting single value
   */
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{expensesPeriod}</Text>
      <Text style={styles.sum}>{expensesSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: "row",
    // backgroundColor: "#F5F5F5",
    backgroundColor: "#393053",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 4,
    marginBottom: 15,
  },
  period: {
    color: "#fff",
    // fontWeight: "bold",
    fontSize: 12,
  },
  sum: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 16,
  },
});
