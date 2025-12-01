import * as React from "react";
import { OptionGrid, OptionPill } from "../../ui/option-pill";
import { PrefCard } from "../../ui/pref-card";

interface Card_3_ProfileScreenProps {
  q3: string | null;
  setQ3: (value: string) => void;
}

export function Card_3_ProfileScreen({ q3, setQ3 }: Card_3_ProfileScreenProps) {
  return (
    <PrefCard number="3" title="How much time do you usually have?">
      <OptionGrid>
        <OptionPill
          icon="clock"
          label="Quick (under 1 hour)"
          selected={q3 === "Quick"}
          onPress={() => setQ3("Quick")}
        />
        <OptionPill icon="clock" label="Medium (1–3 hours)" selected={q3 === "Medium"} onPress={() => setQ3("Medium")} />
        <OptionPill icon="clock" label="Long (half-day or more)" selected={q3 === "Long"} onPress={() => setQ3("Long")} />
      </OptionGrid>
    </PrefCard>
  );
}

