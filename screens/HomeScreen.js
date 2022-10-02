import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { authentication } from "../firebase";
import { useNavigation } from "@react-navigation/native";
import { getAuth } from "firebase/auth";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    const auth = getAuth();
    auth
      .signOut()
      .then(() => {
        console.log("Signed Out");
        navigation.replace("Login");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <View style={styles.container}>
      <Text>Email: {authentication.currentUser?.email}</Text>
      <Pressable style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#0782F9",
    width: "60%",
    marginTop: 40,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
