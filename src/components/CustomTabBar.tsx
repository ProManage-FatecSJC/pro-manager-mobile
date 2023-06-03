import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image} from "react-native";

const styles = StyleSheet.create({
  TabArea: {
    backgroundColor: "#FFFFFF",
    height: "50px",
    flexDirection: "row",
  },
  TabItem: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
});

const TabBar = ({ navigation }: any) => {

  const goTo = (screenName: string) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.TabArea}>
      <TouchableOpacity style={styles.TabItem} onPress={() => goTo("Home")}>
        <Image source={require("../assets/house.png")} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TabItem} onPress={() => goTo("Dashboard")}>
        <Image source={require("../assets/add_user.png")} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TabItem} onPress={() => goTo("Profile")}>
        <Image source={require("../assets/user.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default TabBar;