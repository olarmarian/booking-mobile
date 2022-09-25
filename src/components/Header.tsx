import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Menu, IconButton, Colors } from "react-native-paper";
import { Sorting, SortingLabel } from "../types/enums";

interface HeaderProps {
  sortingChange: Function;
}

export const Header = ({ sortingChange }: HeaderProps) => {
  const [isSortingVisible, setIsSortingVisible] = useState(false);

  const onOpen = () => setIsSortingVisible(true);
  const onClose = () => setIsSortingVisible(false);

  const onSortingChange = (sorting: Sorting) => {
    sortingChange(sorting);
    onClose();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bookings</Text>
      <Menu
        visible={isSortingVisible}
        anchor={
          <IconButton icon="sort" color="#192bc2" onPress={onOpen}></IconButton>
        }
        onDismiss={onClose}
      >
        <Menu.Item
          onPress={() => onSortingChange(Sorting.ASC)}
          title={SortingLabel[Sorting.ASC]}
        />
        <Menu.Item
          onPress={() => onSortingChange(Sorting.DESC)}
          title={SortingLabel[Sorting.DESC]}
        />
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  title: { fontSize: 22, marginLeft: 20, fontWeight: "bold", color: "#192bc2" },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 50,
    borderBottomColor: "#192bc2",
    borderBottomWidth: 2,
  },
});
