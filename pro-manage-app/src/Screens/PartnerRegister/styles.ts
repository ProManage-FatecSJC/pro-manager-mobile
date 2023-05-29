import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 24,
  },
  // estilização do modal
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
  },
  // Estilização da página
  titleWrapper: {
    marginTop: 40,
  },
  titleIcon: {
    gap: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  subtitle: {
    color: '#C3C3C3',
    fontSize: 16,
    marginLeft: 40
   },
  divider: {
    marginTop: 24,
    marginBottom: 32,
    width: "100%",
    height: 1,
    backgroundColor: "#e0e0e0",
  },
  formContentWrapper:{
    gap: 4,
    marginBottom: 16
  },
});

export default styles;
