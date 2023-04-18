import { StyleSheet } from "react-native";

import { colors } from "./src/Constants";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginBottom: 20
  },
  header: {
    backgroundColor: colors.blue500,
    padding: 16,
    borderBottomColor: colors.gray,
    borderBottomWidth: 1
  },
  headerText: {
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 24,
    textAlign: "center",
    letterSpacing: 0.15,
    color: colors.white
  },
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
  }
});
