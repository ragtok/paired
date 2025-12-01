import { Feather } from "@expo/vector-icons";
import * as React from "react";
import { Pressable, Text } from "react-native";
import type { ProfileProps } from "../../Navigation/navigation";
import { ProfileScreenStyles } from "./ProfileScreen.styles";

interface Button_Save_ProfileScreenProps {
  canSave: boolean;
  navigation: ProfileProps["navigation"];
  q1: string | null;
  q2: string | null;
  q3: string | null;
  q4: string | null;
  q5: string[];
}

export function Button_Save_ProfileScreen({
  canSave,
  navigation,
  q1,
  q2,
  q3,
  q4,
  q5,
}: Button_Save_ProfileScreenProps) {
  return (
    <Pressable
      disabled={!canSave}
      onPress={() => {
        console.log({ q1, q2, q3, q4, q5 });
        navigation.goBack();
      }}
      style={({ pressed }) => [
        ProfileScreenStyles.saveBtn,
        (!canSave || pressed) && ProfileScreenStyles.saveBtnDisabled,
      ]}
    >
      <Feather name="save" size={16} color={canSave ? "#00BFA6" : "#6B6B6B"} />
      <Text style={[ProfileScreenStyles.saveBtnText, !canSave && { color: "#6B6B6B" }]}>
        Save Preferences
      </Text>
    </Pressable>
  );
}

