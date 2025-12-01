import { Feather } from "@expo/vector-icons";
import * as React from "react";
import { Pressable, Text, View } from "react-native";
import type { SettingsProps } from "../../Navigation/navigation";
import { settingsStyles } from "./SettingsScreen.styles";

interface Header_SettingsProps {
  navigation: SettingsProps["navigation"];
}

export function Header_Settings({ navigation }: Header_SettingsProps) {
  return (
    <View style={settingsStyles.header}>
      <Pressable
        onPress={() => navigation.goBack()}
        hitSlop={10}
        style={({ pressed }) => [
          settingsStyles.headerIconButton,
          pressed && settingsStyles.headerIconButtonActive,
        ]}
      >
        <Feather name="arrow-left" size={22} color="#00BFA6" />
      </Pressable>
      <Text style={settingsStyles.headerTitle}>Settings</Text>
      <View style={{ width: 40 }} />
    </View>
  );
}

