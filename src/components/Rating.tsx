import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle
} from "react-native";
import { Asset } from "expo-asset";

const ratingIconUri = Asset.fromModule(require("../assets/RatingIcon.png")).uri;

type RatingProps = {
  rating?: number;
  large?: boolean;
  style?: StyleProp<ViewStyle>;
};

export const Rating = ({ rating, large, style }: RatingProps) =>
  rating ? (
    <View style={[style, styles.ratingContainer, large && { padding: 20 }]}>
      <Text style={styles.ratingText}>{rating}</Text>
      <Image style={styles.rating} source={{ uri: ratingIconUri }} />
    </View>
  ) : null;

const styles = StyleSheet.create({
  ratingContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    zIndex: 999,
    paddingRight: 12,
    paddingLeft: 12,
    paddingTop: 7,
    paddingBottom: 7,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10
  },
  ratingText: {
    fontWeight: "bold",
    fontSize: 16,
    paddingRight: 5
  },
  rating: { width: 16, height: 16, top: -1 }
});
