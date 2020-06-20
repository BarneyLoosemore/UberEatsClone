import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export type DishProps = {
  id: number;
  name: string;
  description?: string;
  price: string;
  imageUrl?: string;
};

export const Dish = ({ name, description, price, imageUrl }: DishProps) => (
  <TouchableOpacity style={styles.container}>
    <View style={styles.textContainer}>
      <Text style={{ fontSize: 16 }}>{name}</Text>
      {description ? <Text style={styles.dishText}>{description}</Text> : null}
      <View style={{ marginBottom: 8 }} />
      <Text style={styles.dishText}>{price}</Text>
    </View>
    <Image source={{ uri: imageUrl }} style={styles.dishImage} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    marginBottom: 45,
  },
  textContainer: {
    width: 250,
  },
  dishText: {
    fontSize: 16,
    color: "#4A4A4A",
  },
  dishImage: {
    width: 50,
    height: 50,
  },
});
