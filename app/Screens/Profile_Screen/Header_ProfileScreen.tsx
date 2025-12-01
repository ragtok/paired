import { Feather } from "@expo/vector-icons";
import * as React from "react";
import { Pressable, Text, View } from "react-native";
import type { ProfileProps } from "../../Navigation/navigation";
import { ProfileScreenStyles } from "./ProfileScreen.styles";

interface Header_ProfileScreenProps {
  navigation: ProfileProps["navigation"];
}

export function Header_ProfileScreen({ navigation }: Header_ProfileScreenProps) {
  return (
    <View style={ProfileScreenStyles.header}>
      <Pressable
        onPress={() => navigation.goBack()}
        hitSlop={10}
        style={({ pressed }) => [
          ProfileScreenStyles.headerIconButton,
          pressed && ProfileScreenStyles.headerIconButtonActive,
        ]}
      >
        <Feather name="arrow-left" size={22} color="#00BFA6" />
      </Pressable>

      <View style={{ flex: 1, marginLeft: 8 }}>
        <Text style={ProfileScreenStyles.headerTitle}>Profile</Text>
        <Text style={ProfileScreenStyles.headerSubtitle}>Personalize Your Activities</Text>
      </View>

      <View style={{ width: 40 }} />
    </View>
  );
}

