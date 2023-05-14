import { StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native";
import { View } from "react-native";

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#393053" />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    // backgroundColor: "#393053",
  },
});
