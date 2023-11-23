import { ActivityIndicator, StyleSheet, View } from "react-native";

export const Spinner = ({ size = 100, color = "#0000ff" }) => {
  return (
    <View style={[styles.container]}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
