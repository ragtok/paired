import { useState } from "react";
import type { TabType } from "./MainScreen.types";

export function useMainScreenState() {
  const [activeTab, setActiveTab] = useState<TabType>("Questions");
  const [index, setIndex] = useState<number>(0);
  const [favorites, setFavorites] = useState<Record<number, boolean>>({});
  const [borderTintState, setBorderTintState] =
    useState<"default" | "left" | "right">("default");

  return {
    activeTab,
    setActiveTab,
    index,
    setIndex,
    favorites,
    setFavorites,
    borderTintState,
    setBorderTintState,
  };
}

