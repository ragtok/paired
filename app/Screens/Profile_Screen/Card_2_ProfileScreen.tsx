import * as React from "react";
import { OptionGrid, OptionPill } from "../../ui/option-pill";
import { PrefCard } from "../../ui/pref-card";

interface Card_2_ProfileScreenProps {
  q2: string | null;
  setQ2: (value: string) => void;
}

export function Card_2_ProfileScreen({ q2, setQ2 }: Card_2_ProfileScreenProps) {
  return (
    <PrefCard number="2" title="Do you prefer indoor or outdoor activities?">
      <OptionGrid>
        <OptionPill icon="home" label="Indoor" selected={q2 === "Indoor"} onPress={() => setQ2("Indoor")} />
        <OptionPill icon="sun" label="Outdoor" selected={q2 === "Outdoor"} onPress={() => setQ2("Outdoor")} />
        <OptionPill icon="shuffle" label="Both" selected={q2 === "Both"} onPress={() => setQ2("Both")} />
      </OptionGrid>
    </PrefCard>
  );
}

