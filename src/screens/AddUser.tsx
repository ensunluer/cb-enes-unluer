import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, Pressable } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { ADD_USER } from "../store/action";

export const AddUser = (props: any) => {
  const navigation = useNavigation();
  const user = useSelector((state: any) => state.users.users);
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const addUser = () => {
    dispatch({
      type: ADD_USER,
      payload: {
        username,
        image,
        email,
        age: age,
        id: user.length + 1,
      },
    });
    navigation.goBack();
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={(val) => setUsername(val)}
        placeholder="Username"
      ></TextInput>
      <TextInput
        style={styles.input}
        onChangeText={(val) => setImage(val)}
        placeholder="Image"
      ></TextInput>
      <TextInput
        style={styles.input}
        onChangeText={(val) => setEmail(val)}
        placeholder="Email"
      ></TextInput>
      <TextInput
        style={styles.input}
        onChangeText={(val) => setAge(val)}
        placeholder="Age"
      ></TextInput>
      <Pressable style={styles.button} onPress={() => addUser()}>
        <Text style={styles.bText}>Add New User</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    width: 200,
    height: 50,
    borderColor: "blue",
    marginVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#deee",
    alignSelf: "center",
  },
  button: {
    height: 50,
    backgroundColor: "black",
    borderRadius: 5,
    alignSelf: "center",
  },
  bText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    paddingVertical: 10,
  },
});
