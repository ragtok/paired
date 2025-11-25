import * as React from "react";
import { Text, View } from "react-native";
import { mainScreenStyles } from "./MainScreen.styles";

export function Footer_MainScreen() {
  return (
    <View style={mainScreenStyles.footer}>
      <Text style={mainScreenStyles.footerText}>Code Monkeys</Text>
    </View>
  );
}

