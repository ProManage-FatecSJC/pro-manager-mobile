import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  containerTitle:{
    flex:1,
    justifyContent: 'center'
  },
  TextLogin: {
    fontSize: 40,
    fontWeight: "bold",
  },
  containerInputs: {
    flex: 1
  },
  Input: {
    borderColor: '#e2e8f0',
    borderWidth: 1,
    borderRadius: 4,
    width: '100%',
    paddingHorizontal: 8,
    paddingVertical:16,
  },
  inputMargin: {
    marginTop: 32,
    marginBottom: 8,
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
    height: '30%',
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
