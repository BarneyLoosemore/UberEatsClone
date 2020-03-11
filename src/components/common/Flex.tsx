import React from "react";
import { View } from "react-native";

// TODO: allow style prop to be passed down

type FlexProps = {
  justifyContent?: any;
  alignItems?: any;
  fullWidth?: boolean;
  direction?: any;
  children: React.ReactNode;
};

export const Flex = ({
  justifyContent,
  alignItems,
  fullWidth,
  direction,
  children
}: FlexProps) => (
  <View
    style={{
      display: "flex",
      justifyContent: justifyContent || "flex-start",
      alignItems: alignItems || "flex-start",
      width: fullWidth ? "100%" : "auto",
      flexDirection: direction || "row"
    }}>
    {children}
  </View>
);
