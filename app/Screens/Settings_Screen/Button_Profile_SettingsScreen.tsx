import { Feather } from "@expo/vector-icons";
import * as React from "react";
import { Pressable, Text, View } from "react-native";
import type { SettingsProps } from "../../navigation";
import { settingsStyles } from "./SettingsScreen.styles";

interface Button_Area_ProfileScreenProps {
  navigation: SettingsProps["navigation"];
}

export function Button_Area_ProfileScreen({ navigation }: Button_Area_ProfileScreenProps) {
  return (
    <Pressable
      style={settingsStyles.cardRow}
      android_ripple={{ color: "#1a1a1a" }}
      onPress={() => navigation.navigate("Profile")}
    >
      <View style={settingsStyles.rowLeft}>
        <View style={settingsStyles.rowIconWrap}>
          <Feather name="user-check" size={18} color="#00BFA6" />
        </View>
        <View>
          <Text style={settingsStyles.rowTitle}>Profile</Text>
          <Text style={settingsStyles.rowSubtitle}>Personalize your experience</Text>
        </View>
      </View>
      <Feather name="chevron-right" size={18} color="#6B6B6B" />
    </Pressable>
  );
}

