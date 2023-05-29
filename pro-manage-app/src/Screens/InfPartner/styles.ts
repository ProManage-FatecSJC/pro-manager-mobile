import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  Divider: {
    marginTop: 16,
    marginBottom: 32,
    width: "100%",
    height: 1,
    backgroundColor: "#e0e0e0",
  },
  Text1: {
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 10,
  },
  Text2: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  Text3: {
    fontSize: 20,
    fontWeight: "normal",
  },
  UserImage: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
  Center: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
