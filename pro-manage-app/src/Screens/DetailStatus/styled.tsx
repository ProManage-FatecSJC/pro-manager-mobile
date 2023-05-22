import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 20,
  },
  Text1: {
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 20,
  },
  searchBar: {
    padding: 5,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#00688C",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  NoPartners: {
    color: "#7C7C8A",
    fontSize: 20,
    padding: 5,
    maxWidth: 200,
    textAlign: "center",
    marginTop: 10,
    marginLeft: 60,
    marginBottom: 60,
  },
  Image: {
    alignItems: "center",
    marginTop: -40,
  },
});

export default styles;
