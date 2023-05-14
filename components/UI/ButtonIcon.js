import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
function ButtonIcon({ name, color, size, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <Ionicons name={name} size={size} color={color} />
      </View>
    </Pressable>
  );
}

export default ButtonIcon;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 24,
    margin: 8,
  },
  pressed: {
    opacity: 0.7,
  },
});
