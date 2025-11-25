import { useEffect, useState } from "react";
import { useMainScreenAnimation } from "./Animation_Main_Screen/Animation_MainScreen";
import type { TabType } from "./MainScreen.types";
import { questionPrompts, todoPrompts } from "./Prompts_MainScreen";

interface UseMainScreenHandlersProps {
  activeTab: TabType;
  index: number;
  setIndex: (value: number | ((prev: number) => number)) => void;
  favorites: Record<number, boolean>;
  setFavorites: (value: Record<number, boolean> | ((prev: Record<number, boolean>) => Record<number, boolean>)) => void;
  borderTintState: "default" | "left" | "right";
  setBorderTintState: (state: "default" | "left" | "right") => void;
}

export function useMainScreenHandlers({
  activeTab,
  index,
  setIndex,
  favorites,
  setFavorites,
  borderTintState,
  setBorderTintState,
}: UseMainScreenHandlersProps) {
  const currentPrompts = activeTab === "Questions" ? questionPrompts : todoPrompts;

  // reroll handlers
  const [isRerollPressed, setIsRerollPressed] = useState<boolean>(false);
  const onReroll = () => {
    setIndex((i) => (i - 1 + currentPrompts.length) % currentPrompts.length);
  };

  useEffect(() => setIndex(0), [activeTab, setIndex]);

  const onPrev = () =>
    setIndex((i) => (i - 1 + currentPrompts.length) % currentPrompts.length);
  const onNext = () => setIndex((i) => (i + 1) % currentPrompts.length);
  const onToggleFavorite = () => setFavorites((f) => ({ ...f, [index]: !f[index] }));

  // ---------- Animation Logic ----------
  const { panResponder, animatedStyle, borderColors } = useMainScreenAnimation({
    borderTintState,
    setBorderTintState,
    onNext,
    onPrev,
  });

  return {
    currentPrompts,
    isRerollPressed,
    setIsRerollPressed,
    onReroll,
    onPrev,
    onNext,
    onToggleFavorite,
    panResponder,
    animatedStyle,
    borderColors,
  };
}

