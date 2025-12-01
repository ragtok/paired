import * as React from "react";
import { Text, View } from "react-native";
import { Button_PrivacyPolicy_SettingsScreen } from "../Settings_Screen/Button_PrivacyPolicy_SettingsScreen";
import { Button_TermsOfService_SettingsScreen } from "../Settings_Screen/Button_TermsOfService_SettingsScreen";
import { contactStyles } from "./ContactSupportScreen.styles";

export function Links_Helpful_ContactSupport() {
  return (
    <View style={contactStyles.group}>
      <Text style={contactStyles.groupTitle}>Helpful links</Text>

      <Button_PrivacyPolicy_SettingsScreen />
      <Button_TermsOfService_SettingsScreen />
    </View>
  );
}

