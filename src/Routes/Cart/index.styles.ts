import { StyleSheet } from "react-native";

import { colors } from "Constants";

export const styles = StyleSheet.create({
  noItems: {
    color: colors.gray100,
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 25,
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignSelf: "center"
  },
  content: {
    paddingHorizontal: 15,
    marginVertical: 10
  },
  mainContainer: {
    flex: 1
  },
  amount: {
    color: colors.gray700,
    fontSize: 15,
    fontWeight: "500",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20
  }
});
