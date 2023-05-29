import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    backgroundColor: '#fff'
  },
  containerHeaderUser: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  UserImage: {
    width: 178,
    height: 178,
  },
  UserName: {
    width: '100%',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 24,
  },
  Divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#e0e0e0',
  },
  containerHeaderUserInfo: {
    flex: 1,
  },
  labelInput: {
    color: '#29292e',
    marginBottom: 8,
  },
  Input: {
    borderColor: '#e2e8f0',
    borderWidth: 1,
    borderRadius: 4,
    width: '100%',
    paddingHorizontal: 8,
    paddingVertical:16,
  },
  inputMarginBottom: {
    marginBottom: 16
  }
});

export default styles;
