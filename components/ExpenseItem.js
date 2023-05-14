import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { formattedDate } from "../utils/date";

const ExpenseItem = ({ id, description, date, amount }) => {
  const navigation = useNavigation();

  function expensePressHandler() {
    navigation.navigate("ManageExpense", { expenseID: id });
  }
  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.expenseItem}>
        <View>
          <Text style={styles.description}>{description}</Text>
          <Text>{formattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: "#F5F5F5",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 4,
    // elevation: 2,
    // shadowColor: "grey",
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  description: {
    fontSize: 20,
    fontWeight: "bold",
  },
  amountContainer: {
    backgroundColor: "#393053",
    padding: 12,
    borderRadius: 4,
    textAlign: "center",
    minWidth: 80,
  },
  amount: {
    color: "#fff",
    textAlign: "center",
    fontSize: 13,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.75,
  },
});
