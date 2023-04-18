import { StyleSheet } from "react-native";

import { colors } from "Constants";

export const styles = StyleSheet.create({
  search: {
    padding: 20
  },
  searchField: {
    borderRadius: 4,
    borderColor: colors.gray100,
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 5
  },
  content: {
    paddingHorizontal: 15
  },
  container: {
    flex: 1
  }
});
