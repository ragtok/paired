import { Feather } from "@expo/vector-icons";
import * as React from "react";
import { Pressable, Text, View } from "react-native";
import { settingsStyles } from "./SettingsScreen.styles";

interface Button_Notifications_SettingsScreenProps {
  notifications: boolean;
  setNotifications: (value: boolean) => void;
}

export function Button_Notifications_SettingsScreen({
  notifications,
  setNotifications,
}: Button_Notifications_SettingsScreenProps) {
  return (
    <Pressable
      style={settingsStyles.cardRow}
      android_ripple={{ color: "#1a1a1a" }}
      onPress={() => setNotifications(!notifications)}
    >
      <View style={settingsStyles.rowLeft}>
        <View style={settingsStyles.rowIconWrap}>
          <Feather name="bell" size={18} color="#00BFA6" />
        </View>
        <View>
          <Text style={settingsStyles.rowTitle}>Notifications</Text>
          <Text style={settingsStyles.rowSubtitle}>
            Get daily question or activity suggestions
          </Text>
        </View>
      </View>
      <Feather
        name={notifications ? "toggle-right" : "toggle-left"}
        size={36}
        color={notifications ? "#00BFA6" : "#6B6B6B"}
      />
    </Pressable>
  );
}

