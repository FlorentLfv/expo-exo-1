import { StyleSheet, View } from "react-native";

const Flex = () => {
  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <View style={{ flex: 1, backgroundColor: "white" }} />
      <View style={{ flex: 3, backgroundColor: "green" }} />
      <View style={{ flex: 2, backgroundColor: "red" }} />
      <View style={{ flex: 6, backgroundColor: "blue" }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Flex;