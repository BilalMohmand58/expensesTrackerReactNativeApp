import { useContext, useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import ButtonIcon from "../components/UI/ButtonIcon";
import Loading from "../components/UI/Loading";
import { ExpenseContext } from "../context/Expense-Context";
import { deleteExpense, storeExpense, updateExpense } from "../utils/http";

function ManageExpense({ route, navigation }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState();
  const expensesCtx = useContext(ExpenseContext);
  const editedExpenseID = route.params?.expenseID;
  const isEditing = !!editedExpenseID;
  const selectedExpense = expensesCtx.expenses.find(
    (expense) => expense.id === editedExpenseID
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add New Expense",
      headerRight: () =>
        isEditing && (
          <ButtonIcon
            name="trash"
            color="#F55050"
            size={24}
            onPress={deleteExpenseHandler}
          />
        ),
    });
  }, [navigation, isEditing]);

  function cancelHandler() {
    navigation.goBack();
  }
  async function deleteExpenseHandler() {
    setIsSubmitting(true);
    expensesCtx.removeExpense(editedExpenseID);
    await deleteExpense(editedExpenseID);
    navigation.goBack();
  }
  async function confirmHandler(expenseData) {
    setIsSubmitting(true);
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseID, expenseData); //update expense locally
      await updateExpense(editedExpenseID, expenseData); //update on firebase
    } else {
      const id = await storeExpense(expenseData);
      expensesCtx.addExpense({ ...expenseData, id: id });
    }
    navigation.goBack();
  }

  if (isSubmitting) {
    return <Loading />;
  }

  return (
    <View style={styles.conatiner}>
      <ExpenseForm
        cancelHandler={cancelHandler}
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onSubmit={confirmHandler}
        defaultValues={selectedExpense}
      />
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    padding: 24,
  },
});
