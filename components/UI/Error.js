import { StyleSheet, Text, View } from "react-native";
import Button from "./Button";

const Error = ({ message, onConfirm }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>Something Went Wrong!</Text>
      <Text style={styles.text}>{message}</Text>
      <Button onPress={onConfirm}>Okay</Button>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#393053",
  },
  text: {
    textAlign: "center",
    color: "white",
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
