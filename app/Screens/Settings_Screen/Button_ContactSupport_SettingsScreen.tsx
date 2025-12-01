import { Feather } from "@expo/vector-icons";
import * as React from "react";
import { Pressable, Text } from "react-native";
import type { SettingsProps } from "../../Navigation/navigation";
import { varLoggedInUserEmail, varLoggedInUserName } from "../../ui/sharedUI";
import { settingsStyles } from "./SettingsScreen.styles";

interface Button_ContactSupport_SettingsScreenProps {
  navigation: SettingsProps["navigation"];
}

export function Button_ContactSupport_SettingsScreen({
  navigation,
}: Button_ContactSupport_SettingsScreenProps) {
  return (
    <Pressable
      style={settingsStyles.listRow}
      onPress={() =>
        navigation.navigate("ContactSupport", {
          user: { name: varLoggedInUserName, email: varLoggedInUserEmail },
        })
      }
    >
      <Text style={settingsStyles.listRowText}>Contact Support</Text>
      <Feather name="mail" size={16} color="#6B6B6B" />
    </Pressable>
  );
}

