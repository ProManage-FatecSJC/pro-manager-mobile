import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    justifyContent: "center",
    padding: 24,
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
  },
  headerTitle: {
    fontWeight: '700',
    fontSize: 18,
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
