import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

function ExpenseInput({ label, inputConfigs }) {
  const inputStyles = [styles.input];
  if (inputConfigs && inputConfigs.multiline) {
    inputStyles.push(styles.descriptionInput);
  }

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyles} {...inputConfigs} />
    </View>
  );
}

export default ExpenseInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    color: "#000",
    padding: 8,
    backgroundColor: "#fff",
    fontSize: 18,
  },
  descriptionInput: {
    minHeight: 100,
    textAlignVertical: "top",
    marginBottom: 20,
  },
});
