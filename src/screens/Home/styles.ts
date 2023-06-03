import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    paddingHorizontal: 24,
  },
  headerContentWrapper: {
    paddingTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonOption: {
    width: "45%",
    marginTop: 32,
    paddingVertical: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#00688C",
    alignItems: "center",
  },
  buttonText: {
    color: "#00688C",
    alignItems: "center",
    margin: "auto",
    fontSize: 12,
  },
  divider: {
    marginTop: 16,
    marginBottom: 32,
    width: "100%",
    height: 1,
    backgroundColor: "#e0e0e0",
  }
});

