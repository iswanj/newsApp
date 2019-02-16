import { StyleSheet } from "react-native";

import colors from './colors';
import { normalize } from "uri-js";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.listBackground,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    padding: 16,
    fontSize: 18,
    marginBottom: 2,
    backgroundColor: colors.listItemBackgrouond
  },
  filterContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    paddingBottom: 0,
    backgroundColor: colors.listItemBackgrouond
  },
  listItemTitle: {
    fontSize: normalize(17),
    fontWeight: 'bold'
  },
  listItemDescription: {
    fontSize: normalize(15)
  }
});

export default styles;