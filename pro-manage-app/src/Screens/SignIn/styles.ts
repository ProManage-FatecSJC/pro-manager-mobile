import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: '#f8f8f8',
    padding: 24,
  },
  titleWrapper:{
    justifyContent: "center",
    alignItems: "center",
  },
  textTitle: {
    fontSize: 40,
    fontFamily: "Poppins_500Medium",
    color: '#29292e'
  },
  textSubtitle: {
    fontSize: 24,
    fontFamily: "Poppins_400Regular",
    color: '#29292e',
    textAlign: "center",
  },
  containerInputs: {
    marginTop: 80,
    marginBottom: 32,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    height: '100%',
  },
  modalView: {
    gap: 56,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,

    width: '75%',
    height: '30%',

    backgroundColor: '#f8f8f8',

    borderRadius: 8,
    
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
    width: '100%',

    backgroundColor: "#00688C",
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
    textAlign: 'center',
    fontSize: 24,
  }, 
});