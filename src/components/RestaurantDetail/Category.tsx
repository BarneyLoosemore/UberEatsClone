import React from "react";
import { StyleSheet, Text } from "react-native";

import { Flex } from "../common/Flex";
import { Dish, DishProps } from "./Dish";

type CategoryProps = {
  name: string;
  dishes: DishProps[];
};

export const Category = ({ name, dishes }: CategoryProps) => (
  <Flex direction="column">
    <Text style={styles.title}>{name}</Text>
    {dishes.map((dish) => (
      <Dish key={dish.id} {...dish} />
    ))}
  </Flex>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginTop: 16,
    marginBottom: 32,
    fontFamily: "airbnbMed",
  },
});
