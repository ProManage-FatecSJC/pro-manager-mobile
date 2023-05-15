import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 24,
  },
  Text: {
    marginTop: 10,
    marginBottom: 10,
  },
  Text1: {
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 20,
  },
  Text2: {
    fontSize: 16,
  },
  Divider: {
    marginTop: 20,
    marginBottom: 10,
    width: "100%",
    height: 1,
    backgroundColor: "#e0e0e0",
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  },
  modalView: {
    width: '75%',
    height: '35%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.75,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    width: '50%',
    backgroundColor: "#00688C",
    marginTop: 25,
    borderRadius: 4,
    padding: 15,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  }
});

export default styles;
