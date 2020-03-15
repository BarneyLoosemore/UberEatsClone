import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { useNavigation, useIsFocused } from "react-navigation-hooks";

import { HORIZONTAL_MARGIN } from "../../constants/styles";
import { Rating } from "../Rating";
import { Flex } from "../common/Flex";

type RestaurantCardProps = {
  restaurant: {
    id: number;
    title: string;
    icons?: any;
    rating?: number;
    distance?: number;
    time?: string;
    imageUrl: string;
  };
  index: number;
};

export const RestaurantCard = ({ restaurant, index }: RestaurantCardProps) => {
  const { navigate } = useNavigation();
  const [cardOpacity, setCardOpacity] = useState(1);
  const { id, title, icons, rating, distance, time, imageUrl } = restaurant;
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setCardOpacity(1);
    }
  }, [isFocused]);

  return (
    <TouchableOpacity
      onPress={() => {
        setCardOpacity(0);
        navigate("Detail", { restaurant, title: restaurant.title });
      }}
      style={
        index === 0
          ? { ...styles.container, marginLeft: HORIZONTAL_MARGIN }
          : styles.container
      }>
      <View style={styles.card}>
        <SharedElement id={`${id}`} opacity={cardOpacity}>
          <Image style={styles.image} source={{ uri: imageUrl }} />
        </SharedElement>
        <SharedElement
          style={{
            position: "absolute",
            top: 140,
            right: 30,
            opacity: cardOpacity
          }}
          id={`rating.${id}`}>
          <Rating rating={rating} />
        </SharedElement>

        <View style={styles.content}>
          <Flex justifyContent="space-betwee">
            <Text style={styles.title}>{title}</Text>
            {icons.map((icon, i) => (
              <View key={i} style={{ marginLeft: 5 }}>
                {icon}
              </View>
            ))}
          </Flex>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    marginBottom: 20,
    marginTop: 20
  },
  card: {
    width: 310,
    backgroundColor: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    padding: 15,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10
  },
  image: {
    width: 280,
    height: 175,
    resizeMode: "cover"
    // borderRadius: 5
  },
  content: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginTop: 15,
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    fontFamily: "transport",
    fontSize: 18
  },
  attributes: { fontFamily: "transport" },
  time: { fontFamily: "transport", color: "grey" }
});
