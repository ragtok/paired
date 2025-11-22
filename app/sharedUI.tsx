import * as React from "react";
import { Dimensions, StyleSheet, View } from "react-native";

export const screenHeight = Dimensions.get("window").height;

export const varLoggedInUserName = "Mike Oxsmall";
export const varLoggedInUserEmail = "mike.oxsmall@example.com";

export const varAppName = "CODE MOKEYS";
export const varAppVersion = "v1.0.0";

export const Separator: React.FC = () => <View style={styles.separator} />;


const styles = StyleSheet.create({
  separator: {
    marginVertical: 10,
    borderBottomColor: "#737373",
    alignSelf: "stretch",
    opacity: 0.4,
  },
});

export default {
  screenHeight,
  varLoggedInUserName,
  varLoggedInUserEmail,
  varAppName,
  varAppVersion,
  Separator,
};
