import { useState } from "react";
import { Alert, StyleSheet } from "react-native";
import { View } from "react-native";
import { formattedDate } from "../../utils/date";
import Button from "../UI/Button";
import ExpenseInput from "./ExpenseInput";

function ExpenseForm({
  cancelHandler,
  submitButtonLabel,
  onSubmit,
  defaultValues,
}) {
  const [inputValues, setInputValues] = useState({
    amount: defaultValues ? defaultValues.amount.toString() : "",
    date: defaultValues ? formattedDate(defaultValues.date) : "",
    description: defaultValues ? defaultValues.description : "",
  });
  function inputChangeHandler(inputIdentifier, enteredValue) {
    setInputValues((currentValues) => {
      return {
        ...currentValues,
        [inputIdentifier]: enteredValue, // setting values dynamically
      };
    });
  }
  function submitHandler() {
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description,
    };
    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      Alert.alert("Invalid Inputs", "Please Check Your Inputs Values");
      return;
    }
    onSubmit(expenseData);
  }
  return (
    <View>
      <ExpenseInput
        label="Amount"
        inputConfigs={{
          keyboardType: "decimal-pad",
          onChangeText: inputChangeHandler.bind(this, "amount"),
          value: inputValues.amount,
        }}
      />
      <ExpenseInput
        label="Date"
        inputConfigs={{
          placeholder: "YYYY-MM-DD",
          keyboardType: "decimal-pad",
          onChangeText: inputChangeHandler.bind(this, "date"),
          value: inputValues.date,
          maxLength: 10,
        }}
      />
      <ExpenseInput
        label="Description"
        inputConfigs={{
          onChangeText: inputChangeHandler.bind(this, "description"),
          value: inputValues.description,
          multiline: true,
        }}
      />

      <View style={styles.buttonContainer}>
        <Button onPress={cancelHandler}>Cancel</Button>
        <Button onPress={submitHandler}>{submitButtonLabel}</Button>
      </View>
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
