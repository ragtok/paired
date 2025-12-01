import { Feather } from "@expo/vector-icons";
import * as React from "react";
import { Linking, Pressable, Text } from "react-native";
import { settingsStyles } from "./SettingsScreen.styles";

export function Button_TermsOfService_SettingsScreen() {
  return (
    <Pressable
      style={settingsStyles.listRow}
      onPress={() => Linking.openURL("https://yourwebsite.com/terms")}
    >
      <Text style={settingsStyles.listRowText}>Terms of Service</Text>
      <Feather name="external-link" size={16} color="#6B6B6B" />
    </Pressable>
  );
}

