import { useState } from "react";

export function useProfileScreenState() {
  const [q1, setQ1] = useState<string | null>(null);
  const [q2, setQ2] = useState<string | null>(null);
  const [q3, setQ3] = useState<string | null>(null);
  const [q4, setQ4] = useState<string | null>(null);
  const [q5, setQ5] = useState<string[]>([]);
  
  const toggleQ5 = (val: string) =>
    setQ5((arr) => (arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val]));

  const canSave = Boolean(q1 && q2 && q3 && q4);

  return {
    q1,
    setQ1,
    q2,
    setQ2,
    q3,
    setQ3,
    q4,
    setQ4,
    q5,
    setQ5,
    toggleQ5,
    canSave,
  };
}

