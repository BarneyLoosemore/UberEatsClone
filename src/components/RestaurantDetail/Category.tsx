import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import { Flex } from "../common/Flex";

type DishProps = {
  id: number;
  name: string;
  description?: string;
  price: string;
  imageUrl?: string;
};
type CategoryProps = {
  id: number;
  name: string;
  dishes: DishProps[];
};

const Dish = ({ id, name, description, price, imageUrl }: DishProps) => (
  <>
    <Flex justifyContent="space-between" fullWidth>
      <Flex direction="column">
        <Text style={styles.dishText}>{name}</Text>
        {/* TODO add typograpghy - e.g. <Minor>, <Base>, etc. text */}
        {description ? (
          <Text style={styles.dishText}>{description}</Text>
        ) : null}
        <Text style={styles.dishText}>{price}</Text>
      </Flex>
      <Image source={{ uri: imageUrl }} style={styles.dishImage} />
    </Flex>
    <View style={{ marginBottom: 32 }} />
  </>
);

export const Category = ({ id, name, dishes }: CategoryProps) => (
  <Flex direction="column">
    <Text style={styles.title}>{name}</Text>
    {dishes.map(dish => (
      <Dish key={dish.id} {...dish} />
    ))}
  </Flex>
);

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 24,
    marginTop: 16,
    marginBottom: 32
  },
  dishText: {
    fontSize: 16
  },
  dishImage: {
    width: 50,
    height: 50
  }
});
