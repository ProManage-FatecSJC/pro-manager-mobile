import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    backgroundColor: "#fff",
  },
  containerHeaderUser: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 40,
    marginBottom: 32,
  },
  UserImage: {
    width: 150,
    height: 150,
  },
  UserName: {
    width: "100%",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 20,
  },
  Divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#e0e0e0",
  },
  containerHeaderUserInfo: {
    flex: 1,
  },
  labelInput: {
    color: "#29292e",
    marginBottom: 8,
  },
  Input: {
    borderColor: "#e2e8f0",
    borderWidth: 1,
    borderRadius: 4,
    width: "100%",
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  inputMarginBottom: {
    marginBottom: 30,
  },
  Space: {
    marginBottom: 30,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  modalView: {
    width: "75%",
    height: "30%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.75,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    width: "50%",
    backgroundColor: "#00688C",
    marginTop: 25,
    borderRadius: 4,
    padding: 15,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default styles;
