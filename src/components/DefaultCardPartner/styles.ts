import { StyleSheet } from "react-native";	

export const styles = StyleSheet.create({
    button: {
      backgroundColor: '#f8f8f8',

        marginBottom: 16,
        padding: 24,

        borderRadius: 32,

        borderColor: '#00688C',
        borderWidth: 2,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0,
        shadowRadius: 32,

        elevation: 2,
    },
    container: {
      flex: 1,
      gap: 16,
      alignItems: 'flex-start',
      flexDirection: 'column',
    },
    headerWrapper: {
      paddingVertical: 8,
      paddingHorizontal: 16,

      backgroundColor: '#4994CE',

      borderRadius: 999,
    },
    headerTitle: {
      color: "#f8f8f8",
      fontSize: 18,
    },
    textCardWrapper: {
      gap: 16,
    },
    textTitle: {
      alignItems: 'center',
      color: "#29292e",
      fontSize: 18,
    },
  });