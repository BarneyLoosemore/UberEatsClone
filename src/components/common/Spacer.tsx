import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ViewStyle,
  TextStyle
} from "react-native";

const dimensions = Dimensions.get("window");
const FULL_WIDTH = dimensions.width;

// [WIP]

const getMargin = ({
  margin = 0,
  left = 0,
  right = 0,
  top = 0,
  bottom = 0
}) => {
  return {
    marginLeft: margin || left || 0,
    marginRight: margin || right || 0,
    marginBottom: margin || top || 0,
    marginTop: margin || bottom || 0
  };
};

type SpacerProps = {
  margin?: number;
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  children?: React.ReactNode;
};

export const Spacer = ({ children = null }, props: SpacerProps) => (
  <View style={getMargin(props)}>{children}</View>
);
