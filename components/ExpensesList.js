import { FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";
const renderExpenseItem = (itemData) => {
  return <ExpenseItem {...itemData.item} />;
};
function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      keyExtractor={(item) => {
        return item.key;
      }}
      renderItem={renderExpenseItem}
    />
  );
}

export default ExpensesList;
