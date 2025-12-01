import * as React from "react";
import { Text, View } from "react-native";
import type { SettingsProps } from "../../navigation";
import { Button_ContactSupport_SettingsScreen } from "./Button_ContactSupport_SettingsScreen";
import { Button_PrivacyPolicy_SettingsScreen } from "./Button_PrivacyPolicy_SettingsScreen";
import { Button_TermsOfService_SettingsScreen } from "./Button_TermsOfService_SettingsScreen";
import { settingsStyles } from "./SettingsScreen.styles";

interface Buttons_Support_SettingsScreenProps {
  navigation: SettingsProps["navigation"];
}

export function Buttons_Support_SettingsScreen({
  navigation,
}: Buttons_Support_SettingsScreenProps) {
  return (
    <View style={settingsStyles.group}>
      <Text style={settingsStyles.groupTitle}>Support</Text>
       {/* SettingsScreen → Privacy Policy */}
      <Button_PrivacyPolicy_SettingsScreen />
       {/* SettingsScreen → Terms of Service */}
      <Button_TermsOfService_SettingsScreen />
      {/* SettingsScreen → Contact Support */}
      <Button_ContactSupport_SettingsScreen navigation={navigation} />
    </View>
  );
}

