import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 24,
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Divider:{
    marginTop: 16,
    marginBottom: 32,
    width: "100%",
    height: 1,
    backgroundColor: "#e0e0e0"
  },
  Button: {
    width: "45%",
    marginTop: 32,
    paddingVertical: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#00688C",
    alignItems: "center",
  },
  buttonText: {
    color: "#00688C",
    alignItems: "center",
    margin: "auto",
    fontSize: 12,
  },
});

export default styles;
