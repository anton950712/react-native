import { StyleSheet } from "react-native"

import { colors } from "Constants";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 40
  },
  img: {
    width: 250,
    height: 250,
    alignSelf: "center"
  },
  container: {
    paddingHorizontal: 20,
    marginBottom: 20
  },
  name: {
    color: colors.gray700,
    fontSize: 15,
    lineHeight: 30,
    paddingTop: 10,
    fontWeight: "400"
  },
  price: {
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 20,
    color: colors.gray700
  },
  description: {
    color: colors.gray700,
    fontSize: 15,
    lineHeight: 20,
    paddingTop: 10,
    fontWeight: "400",
    alignSelf: "flex-start"
  },
  mainDataContainer: {
    paddingBottom: 25,
    borderBottomColor: colors.gray100,
    width: "100%",
    borderBottomWidth: 1,
    alignSelf: "flex-start"
  },
  button: {
    position: "absolute",
    bottom: 10,
    paddingHorizontal: 20,
    width: "100%"
  }
});
