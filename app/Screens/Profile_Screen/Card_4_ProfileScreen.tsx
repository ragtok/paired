import * as React from "react";
import { OptionGrid, OptionPill } from "../../ui/option-pill";
import { PrefCard } from "../../ui/pref-card";

interface Card_4_ProfileScreenProps {
  q4: string | null;
  setQ4: (value: string) => void;
}

export function Card_4_ProfileScreen({ q4, setQ4 }: Card_4_ProfileScreenProps) {
  return (
    <PrefCard number="4" title="Do you enjoy solo or group activities more?">
      <OptionGrid>
        <OptionPill icon="user" label="Solo" selected={q4 === "Solo"} onPress={() => setQ4("Solo")} />
        <OptionPill icon="users" label="With friends" selected={q4 === "With friends"} onPress={() => setQ4("With friends")} />
        <OptionPill icon="compass" label="Either" selected={q4 === "Either"} onPress={() => setQ4("Either")} />
      </OptionGrid>
    </PrefCard>
  );
}

