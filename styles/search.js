import { StyleSheet } from "react-native";

import colors from './colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.listBackground,
    padding: 17
  },
  listItem: {
    padding: 16,
    fontSize: 18,
    marginBottom: 2,
    backgroundColor: colors.listItemBackgrouond
  }
});

export default styles;