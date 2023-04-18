import { StyleSheet } from "react-native"

import { colors } from "Constants";

export const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100
  },
  container: {
    padding: 10,
    flex: 1,
    alignItems: "center",
    borderRadius: 5,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity:  0.16,
    shadowRadius: 1.51,
    elevation: 2,
    backgroundColor: colors.white,
    margin: 5,
  },
  name: {
    color: colors.gray700,
    fontSize: 15,
    lineHeight: 20,
    paddingTop: 10,
    fontWeight: "400",
    alignSelf: "flex-start"
  },
  price: {
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 20,
    color: colors.gray700,
    alignSelf: "flex-start"
  }
});
