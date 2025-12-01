import * as React from "react";
import { Text, View } from "react-native";
import { varAppName, varAppVersion } from "../../ui/sharedUI";
import { settingsStyles } from "./SettingsScreen.styles";

export function Buttons_About_SettingsScreen() {
  return (
    <View style={settingsStyles.group}>
      <Text style={settingsStyles.groupTitle}>About</Text>
      <View style={settingsStyles.cardBox}>
        <Text style={settingsStyles.appName}>
          {varAppName} {varAppVersion}
        </Text>
        <Text style={settingsStyles.appDesc}>
          Discover engaging questions and activities to spark conversations and
          exploration - with more features coming soon.
        </Text>
      </View>
    </View>
  );
}

