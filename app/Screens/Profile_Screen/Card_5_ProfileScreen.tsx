import * as React from "react";
import { Text } from "react-native";
import { OptionGrid, OptionPill } from "../../ui/option-pill";
import { PrefCard } from "../../ui/pref-card";
import { ProfileScreenStyles } from "./ProfileScreen.styles";

interface Card_5_ProfileScreenProps {
  q5: string[];
  toggleQ5: (val: string) => void;
}

export function Card_5_ProfileScreen({ q5, toggleQ5 }: Card_5_ProfileScreenProps) {
  return (
    <PrefCard number="5" title="What's your vibe?">
      <Text style={ProfileScreenStyles.hint}>Select all that apply</Text>
      <OptionGrid>
        <OptionPill icon="coffee" label="Chill" selected={q5.includes("Chill")} onPress={() => toggleQ5("Chill")} multi />
        <OptionPill icon="activity" label="Adventurous" selected={q5.includes("Adventurous")} onPress={() => toggleQ5("Adventurous")} multi />
        <OptionPill icon="message-circle" label="Social" selected={q5.includes("Social")} onPress={() => toggleQ5("Social")} multi />
        <OptionPill icon="zap" label="Creative" selected={q5.includes("Creative")} onPress={() => toggleQ5("Creative")} multi />
      </OptionGrid>
    </PrefCard>
  );
}

