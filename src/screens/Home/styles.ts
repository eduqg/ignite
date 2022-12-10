import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
  },
  blackImage: {
    justifyContent: "center",
    alignItems: "center",
    height: 173,
  },
  logo: {
    width: 110,
    height: 32,
  },
  content: {
    paddingHorizontal: 24,
    transform: [{ translateY: -24 }],
  },
  icon: {
    width: 16,
    height: 16,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 42,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#262626",
    borderRadius: 5,
    color: "#FFFF",
    padding: 16,
    fontSize: 16,
    marginRight: 12,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
  },
  emptyContent: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 48,
    paddingHorizontal: 20,
    borderTopColor: '#808080',
    borderTopWidth: 1
  },
  board: {
    width: 56,
    height: 56,
  },
  listEmptyTextBold: {
    color: "#808080",
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 16
  },
  listEmptyText: {
    color: "#808080",
    fontSize: 14,
    textAlign: "center",
    marginTop: 4,
  },
});
