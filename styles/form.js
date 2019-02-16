// @flow
import { StyleSheet } from "react-native";
import { normalize } from "./sizes";

const styles = StyleSheet.create({
  inputGroup: {
    flex: 0,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginBottom: 12
  },
  smallInputGroup: {
    paddingLeft: 0,
    paddingRight: 0
  },
  noBottomMargin: {
    marginBottom: 0
  },
  inputElementWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  inputSubWrapper: {
    flex: 1,
    flexDirection: "column"
  },
  input: {
    color: "#333",
    paddingTop: 9,
    paddingBottom: 8,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: normalize(18)
  },
  samllInput: {
    padding: 4,
    fontSize: normalize(16)
  },
  container: {
    flex: 6,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#777"
  },
  noBorder: {
    borderWidth: 0
  },
  pickerContainer: {
    paddingTop: 9,
    paddingBottom: 12,
    paddingLeft: 10,
    paddingRight: 10
  },
  dataTextWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  text: {
    fontSize: normalize(18),
    color: "#999"
  },
  dateRemoveBtn: {
    paddingLeft: 12,
    paddingRight: 12
  }
});

export default styles;
