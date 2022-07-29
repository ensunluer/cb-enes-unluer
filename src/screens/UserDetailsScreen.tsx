import { Text, View, StyleSheet } from "react-native";

export const UserDetailsScreen = ({
  username,
  age,
  address,
  postalCode,
}: any) => {
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.text}>{`Username: ${username}`}</Text>
        <Text style={styles.text}>{`Age: ${age}`}</Text>
        <Text style={styles.text}>{`Address: ${address}`}</Text>
        <Text style={styles.text}>{`PostalCode: ${postalCode}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
  },
  text: {
    fontSize: 20,
    marginTop: 10,
  },
});
