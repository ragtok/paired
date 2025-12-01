import * as React from "react";
import { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { SettingsProps } from "../../navigation";
import { Buttons_Profile_SettingsScreen } from "./Area_Profile_SettingsScreen";
import { Buttons_Support_SettingsScreen } from "./Area_Support_SettingsScreen";
import { Buttons_About_SettingsScreen } from "./Buttons_About_SettingsScreen";
import { Header_Settings } from "./Header_Settings";
import { settingsStyles } from "./SettingsScreen.styles";

// ---------- Screen (Settings) ----------
export function SettingsScreen({ navigation }: SettingsProps) {
  const [notifications, setNotifications] = useState<boolean>(true);
  const [darkMode, setDarkMode] = useState<boolean>(true);

  return (
    <SafeAreaView style={settingsStyles.screen}>
      {/* Header */}
      <Header_Settings navigation={navigation} />
      {/* Content */}
      <View style={settingsStyles.container}>
        {/* Preferences */}
        <Buttons_Profile_SettingsScreen
          navigation={navigation}
          notifications={notifications}
          setNotifications={setNotifications}
        />
        {/* Support */}
        <Buttons_Support_SettingsScreen navigation={navigation} />
        {/* About */}
        <Buttons_About_SettingsScreen />
      </View>
    </SafeAreaView>
  );
}

