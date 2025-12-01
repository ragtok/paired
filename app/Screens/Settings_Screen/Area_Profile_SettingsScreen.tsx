import * as React from "react";
import { View } from "react-native";
import type { SettingsProps } from "../../navigation";
import { Button_Notifications_SettingsScreen } from "./Button_Notifications_SettingsScreen";
import { Button_Area_ProfileScreen } from "./Button_Profile_SettingsScreen";
import { Button_Subscription_SettingsScreen } from "./Button_Subscription_SettingsScreen";
import { settingsStyles } from "./SettingsScreen.styles";

interface Buttons_Profile_SettingsScreenProps {
  navigation: SettingsProps["navigation"];
  notifications: boolean;
  setNotifications: (value: boolean) => void;
}

export function Buttons_Profile_SettingsScreen({
  navigation,
  notifications,
  setNotifications,
}: Buttons_Profile_SettingsScreenProps) {
  return (
    <View style={settingsStyles.group}>


      {/* Profile */}
      <Button_Area_ProfileScreen navigation={navigation} />

      {/* Notifications */}
      <Button_Notifications_SettingsScreen
        notifications={notifications}
        setNotifications={setNotifications}
      />

      {/* Subsription */}
      {/* MAKE A NEW WINDOW TO MANAGE THE SUBSCRIPTION WHEN THIS IS ACCPETED AND RELEASED */}
      <Button_Subscription_SettingsScreen navigation={navigation} />
      
    </View>
  );
}

