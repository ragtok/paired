import { Feather } from "@expo/vector-icons";
import * as React from "react";
import { Pressable } from "react-native";
import { cardStyles } from "./MainScreen.styles";

interface Button_Reroll_MainScreenProps {
  isRerollPressed: boolean;
  setIsRerollPressed: (pressed: boolean) => void;
  onReroll: () => void;
}

export function Button_Reroll_MainScreen({
  isRerollPressed,
  setIsRerollPressed,
  onReroll,
}: Button_Reroll_MainScreenProps) {
  return (
    <Pressable
      onPressIn={() => setIsRerollPressed(true)}
      onPressOut={() => setIsRerollPressed(false)}
      onPress={onReroll}
      hitSlop={10}
      style={[cardStyles.favoriteBtn, isRerollPressed && { backgroundColor: "rgba(0,191,166,0.2)" }]}
    >
      <Feather name="rotate-ccw" size={40} color={isRerollPressed ? "#00BFA6" : "#6B6B6B"} />
    </Pressable>
  );
}

