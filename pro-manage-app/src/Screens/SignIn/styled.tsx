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
  }
});

export default styles;
