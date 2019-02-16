// @flow
import { StyleSheet } from "react-native";
import { normalize } from "./sizes";
import colors from "./colors";

const styles = StyleSheet.create({
  containerStyle: {
    flex: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: 24,
    backgroundColor: colors.btnBackground,
    padding: 8,
    paddingTop: 28,
    paddingBottom: 28,
    minWidth: 120,
    borderRadius: 10
  },
  btnTextDefault: {
    fontSize: normalize(16),
    color: colors.btnTextColor
  },
  transparent: {
    flex: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    height: 24,

    borderWidth: 2,
    borderColor: colors.btnBackground,
    borderRadius: 4,
    backgroundColor: "transparent"
  },
  iconBtn: {
    flex: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    height: 24,
    backgroundColor: "transparent"
  },
  btnTextTransparent: {
    fontSize: normalize(18),
    color: "transparent"
  }
});

export default styles;
