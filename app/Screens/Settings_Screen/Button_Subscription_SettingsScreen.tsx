import { Feather } from "@expo/vector-icons";
import * as React from "react";
import { Pressable, Text, View } from "react-native";
import type { SettingsProps } from "../../Navigation/navigation";
import { settingsStyles } from "./SettingsScreen.styles";

interface Button_Subscription_SettingsScreenProps {
  navigation: SettingsProps["navigation"];
}

export function Button_Subscription_SettingsScreen({
  navigation,
}: Button_Subscription_SettingsScreenProps) {
  return (
    <Pressable
      style={settingsStyles.cardRow}
      android_ripple={{ color: "#1a1a1a" }}
      onPress={() => navigation.navigate("Profile")}
    >
      <View style={settingsStyles.rowLeft}>
        <View style={settingsStyles.rowIconWrap}>
          <Feather name="credit-card" size={18} color="#00BFA6" />
        </View>
        <View>
          <Text style={settingsStyles.rowTitle}>Subscription</Text>
          <Text style={settingsStyles.rowSubtitle}>Manage your subscription</Text>
        </View>
      </View>
      <Feather name="chevron-right" size={18} color="#6B6B6B" />
    </Pressable>
  );
}

