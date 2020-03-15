import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "react-navigation-hooks";

import { RestaurantDetail } from "../components/RestaurantDetail/RestaurantDetail";

export const Detail = () => {
  const { getParam } = useNavigation();
  const restaurant = getParam("restaurant");
  return restaurant ? (
    <View style={styles.container}>
      <RestaurantDetail {...restaurant} />
    </View>
  ) : null;
};

Detail.sharedElements = (navigation: ReturnType<typeof useNavigation>) => {
  const restaurant = navigation.getParam("restaurant");
  return [`${restaurant.id}`, `rating.${restaurant.id}`];
};

const styles = StyleSheet.create({
  container: {},
  headerImage: {}
});
