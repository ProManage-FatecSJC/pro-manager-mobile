import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    background: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#191970'
    },
buttonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonSubmit: {
    marginTop: 70,
    backgroundColor: "#00688C",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 4,
    alignItems: "center",
  },
  Container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 24,
    alignItems: 'center',
  },
  Title: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 24,
  },
  Divider: {
    marginTop: 20,
    marginBottom: 10,
    width: "100%",
    height: 1,
    backgroundColor: "#e0e0e0",
  },
  Text: {
    marginTop: 10,
    marginBottom: 10,
  },
  Text1: {
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 10,
  },
  Text2: {
    fontSize: 16,
  },
  input: {
    height: 50,
    width: "100%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  
});
export default styles;