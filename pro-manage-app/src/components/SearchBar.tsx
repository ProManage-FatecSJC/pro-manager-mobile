import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ placeholder, onChangeText }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          onChangeText={(text) => onChangeText(text)}
        />
        <Feather
          name="search"
          size={15}
          color="#7C7C8A"
          style={{ marginBottom: 0 }}
        />
      </View>
    </View>
  );
};
export default SearchBar;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    marginTop: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },
  searchBar: {
    padding: 5,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#00688C",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 15,
    marginLeft: 10,
    width: "100%",
  },
});
