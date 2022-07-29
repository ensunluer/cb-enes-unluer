import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import { useDispatch } from "react-redux";
import { DELETE_USER } from "../store/action";

interface UserCardIProps {
  user: {
    image: string;
    username: string;
    age: number;
    id: number;
  };
}

export const UserCard = (props: UserCardIProps) => {
  const navigation: any = useNavigation();
  const { image, username, age, id } = props.user;
  const dispatch = useDispatch();

  const deleteUser = (id: number) => {
    dispatch({ type: DELETE_USER, payload: { id: id } });
  };

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("UserDetailsScreen")}
    >
      <ImageBackground
        source={{ uri: image }}
        style={{ width: "100%", height: "100%" }}
        resizeMode="contain"
      >
        <View style={styles.overlay}>
          <Text style={styles.users}>{`${username} , ${age}`}</Text>
        </View>
        <Pressable style={styles.close} onPress={() => deleteUser(id)}>
          <FontAwesome name="close" size={20} />
        </Pressable>
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    height: 150,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    borderRadius: 8,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 19,
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#deee",
    padding: 10,
    alignItems: "center",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  users: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
  close: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "#deee",
    width: 30,
    height: 30,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
