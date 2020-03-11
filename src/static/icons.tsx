import React from "react";

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

// export const INDIAN = "";
// export const CHINESE = "";
// export const PASTA = "";
// export const SUSHI = "";

export default {
  Pizza: <Ionicons name="md-pizza" size={20} />,
  Healthy: <Ionicons name="ios-nutrition" size={20} />,
  Dessert: <MaterialCommunityIcons name="cupcake" size={20} />,
  Hot: <MaterialCommunityIcons name="chili-mild" size={20} />,
  VeryHot: <MaterialCommunityIcons name="chili-medium" size={20} />,
  ExtremelyHot: <MaterialCommunityIcons name="chili-hot" size={20} />,
  Environmental: <MaterialCommunityIcons name="leaf" size={20} />
};
