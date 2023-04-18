import { StyleSheet } from "react-native";

import { colors } from "Constants";

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
  }
});
