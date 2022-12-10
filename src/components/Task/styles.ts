import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#262626",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  nameChecked: {
    flex: 1,
    fontSize: 16,
    color: "#D9D9D9",
    marginLeft: 8,
    marginRight: 8,
    paddingVertical: 4,
    textDecorationLine: "line-through"
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: "#D9D9D9",
    marginLeft: 8,
    marginRight: 8,
    paddingVertical: 4,
  },
  check: {
    height: 24,
    width: 24,
  },
  trash: {
    height: 32,
    width: 32,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
