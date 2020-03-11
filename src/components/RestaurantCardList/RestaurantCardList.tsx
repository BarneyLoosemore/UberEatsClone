import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback
} from "react-native";

import { RestaurantCard } from "./RestaurantCard";

type RestaurantCardListProps = {
  restaurants: {
    id: number;
    title: string;
    icons?: any;
    rating?: number;
    distance: number;
    imageUrl: string;
  }[];
};

export const RestaurantCardList = ({
  restaurants
}: RestaurantCardListProps) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {restaurants.map((restaurant, i) => (
        <RestaurantCard key={restaurant.id} index={i} restaurant={restaurant} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
