import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Divider: {
    marginTop: 16,
    marginBottom: 32,
    width: "100%",
    height: 1,
    backgroundColor: "#e0e0e0",
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
  Text: {
    width: "100%",
    marginTop: 64,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  NoPartners: {
    color: "#7C7C8A",
    fontSize: 20,
    padding: 5,
    maxWidth: 200,
    textAlign: "center",
    marginTop: 10,
    marginLeft: 60,
  },
  Image:{
    alignItems: "center",
    marginTop: 50,
  }
});

export default styles;
