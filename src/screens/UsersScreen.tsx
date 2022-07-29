import axios from "axios";
import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { UserCard } from "../components/UserCard";
import { SET_USER } from "../store/action";
import { User } from "../types";

interface UserScreenProps {
  navigation: any;
}

export const UsersScreen = ({ navigation }: UserScreenProps) => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.users.users);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const data = await axios.get("https://dummyjson.com/users");
    if (data.data.users) dispatch({ type: SET_USER, payload: data.data.users });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={user}
        renderItem={({ item }: { item: User }) => <UserCard user={item} />}
      />
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("AddUser")}
      >
        <Text style={styles.bText}>ADD USER</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    alignSelf: "center",
  },
  button: {
    height: 50,
    backgroundColor: "black",
    position: "absolute",
    bottom: 25,
    borderRadius: 8,
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
