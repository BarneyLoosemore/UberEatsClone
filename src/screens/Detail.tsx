import React from "react";
import { useNavigation } from "react-navigation-hooks";

import { RestaurantDetail } from "../components/RestaurantDetail/RestaurantDetail";

export const Detail = () => {
  const { getParam } = useNavigation();
  const restaurant = getParam("restaurant");
  return restaurant ? <RestaurantDetail {...restaurant} /> : null;
};

Detail.sharedElements = (navigation: ReturnType<typeof useNavigation>) => {
  const restaurant = navigation.getParam("restaurant");
  return [`${restaurant.id}`, `rating.${restaurant.id}`];
};
