import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import { Asset } from "expo-asset";

import { FILTER_BAR_HEIGHT, STATUS_BAR_OFFSET } from "../constants/styles";
const filterIconUri = Asset.fromModule(require("../assets/Filter.png")).uri;
import { MaterialIcons } from "@expo/vector-icons";

const filters = [
  {
    identifier: "All",
    title: null,
    icon: <MaterialIcons name="filter-list" color="white" size={22} />
  },
  { identifier: "Sort", title: "Sort", icon: null },
  { identifier: "Price", title: "Price", icon: null },
  { identifier: "Offers", title: "Offers", icon: null }
];

type FilterBarProps = {
  setFilter: (filter: string) => void;
};

export const FilterBar = ({ setFilter }: FilterBarProps) => (
  <>
    <View style={styles.offset} />
    <View style={styles.container}>
      <ScrollView style={{ paddingLeft: 20 }} horizontal={true}>
        {filters.map(({ identifier, title, icon }, i) =>
          title || icon ? (
            <TouchableOpacity
              style={styles.filterItemContainer}
              key={i}
              onPress={() => setFilter(identifier)}>
              {title ? (
                <Text style={styles.filterItemText}>{title}</Text>
              ) : null}
              {icon ? icon : null}
            </TouchableOpacity>
          ) : null
        )}
      </ScrollView>
    </View>
  </>
);

const styles = StyleSheet.create({
  container: {
    height: FILTER_BAR_HEIGHT,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  filterItemContainer: {
    backgroundColor: "#0FC772",
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginRight: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5
  },
  filterItemText: {
    color: "white",
    fontFamily: "transport",
    fontSize: 18
  },
  offset: {
    paddingTop: STATUS_BAR_OFFSET,
    backgroundColor: "white"
  }
});
