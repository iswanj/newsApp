import { StyleSheet } from "react-native";
import { normalize } from "./sizes";
import colors from "./colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column"
  },
  imageContainer: {
    flex: 1,
    backgroundColor: "#ddd",
    width: "100%"
  },  
  image: {
    flex: 4,
    height: 200
  },
  content: {
    flex: 1,
    padding: 14
  },
  title: {
    textAlign: "left",
    fontSize: normalize(20),
    fontWeight: "bold",
    color: colors.titleTextColor,
    paddingBottom: 10
  },
  description: {
    textAlign: "left",
    fontSize: normalize(17),
    color: colors.descriptionTextColor,
    paddingBottom: 10
  },
  contentText: {
    textAlign: "left",
    fontSize: normalize(17),
    color: colors.contentTextColor
  },
  meta: {
    padding: 14,
    paddingTop: 0
  }
});

export default styles;