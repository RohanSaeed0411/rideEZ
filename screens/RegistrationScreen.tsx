
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { CurrentRenderContext, ParamListBase, useNavigation } from "@react-navigation/native";
import Transitioning from "react-native-reanimated";

import { authentication } from "../firebase";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { StackNavigationProp } from '@react-navigation/stack/';
import {createAppContainer} from 'react-navigation'; 
import {createStackNavigator} from 'react-navigation-stack';

export default function RegistrationScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();;
 
  // const emailInputRef = createRef();
  // const ageInputRef = createRef();
  // const addressInputRef = createRef();
  // const passwordInputRef = createRef();
 
  const handleSignUp = () => {


    setErrortext('');
    if (!name) {
      Alert.alert('Please fill Name');
      return;
    }
    if (!email) {
      Alert.alert('Please fill Email');
      return;
    }
    if (!age) {
      Alert.alert('Please fill Age');
      return;
    }
    if (!address) {
      Alert.alert('Please fill Address');
      return;
    }
    if (!password) {
      Alert.alert('Please fill Password');
      return;
    }
   
    var dataToSend = {
      UserName: name,
      UserEmail: email,
      UserAge: age,
      userAddress:address,
      userPassword:password,
    };
   
    console.log("Register Pressed With all data");

    createUserWithEmailAndPassword(authentication, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered with: " + user.email);
        setIsRegistraionSuccess(true);
        Alert.alert("Registered with: " + user.email);
        
        navigation.replace("Login");
      })
      .catch((err) => {
        Alert.alert(err.message);
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
          <TextInput
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Age"
          value={age}
          onChangeText={(text) => setAge(text)}
          style={styles.input}
        
        />
         <TextInput
          placeholder="Address"
          value={address}
          onChangeText={(text) => setAddress(text)}
          style={styles.input}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
});
