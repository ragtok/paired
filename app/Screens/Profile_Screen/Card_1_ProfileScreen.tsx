import * as React from "react";
import { OptionGrid, OptionPill } from "../../ui/option-pill";
import { PrefCard } from "../../ui/pref-card";

interface Card_1_ProfileScreenProps {
  q1: string | null;
  setQ1: (value: string) => void;
}

export function Card_1_ProfileScreen({ q1, setQ1 }: Card_1_ProfileScreenProps) {
  return (
    <PrefCard number="1" title="What kind of activities do you usually prefer?">
      <OptionGrid>
        <OptionPill icon="zap" label="Active" selected={q1 === "Active"} onPress={() => setQ1("Active")} />
        <OptionPill icon="tablet" label="Passive" selected={q1 === "Passive"} onPress={() => setQ1("Passive")} />
        <OptionPill
          icon="codesandbox"
          label="Creative"
          selected={q1 === "Creative"}
          onPress={() => setQ1("Creative")}
        />
      </OptionGrid>
    </PrefCard>
  );
}

