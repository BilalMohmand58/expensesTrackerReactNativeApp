import { Pressable, View, Text, StyleSheet } from "react-native";

function Button({ children, onPress }) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <View>
          <Text style={styles.btnText}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#635985",
    margin: 8,
    borderRadius: 4,
    width: 100,
    // flex: 1,
  },
  btnText: {
    textAlign: "center",
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
  },
});
