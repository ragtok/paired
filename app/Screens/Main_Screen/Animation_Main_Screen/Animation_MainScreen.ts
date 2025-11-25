import { useRef } from "react";
import { Animated } from "react-native";
import type { ColorTuple } from "../GradientHelper_MainScreen.js";
import type { UseMainScreenAnimationProps } from "./Animation_Props.js";
import { createPanResponder } from "./createPanResponder";

export function useMainScreenAnimation({
  borderTintState,
  setBorderTintState,
  onNext,
  onPrev,
}: UseMainScreenAnimationProps) {
  const position = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    createPanResponder({
      position,
      borderTintState,
      setBorderTintState,
      onNext,
      onPrev,
    })
  ).current;

  const rotate =
    (position.x.interpolate({
      inputRange: [-300, 0, 300],
      outputRange: ["-10deg", "0deg", "10deg"],
    }) as unknown) as Animated.AnimatedInterpolation<string>;

  const animatedStyle = { transform: [{ translateX: position.x }, { rotate }] };

  // Gradient border colors (typed as readonly tuples)
  const borderColors: ColorTuple =
    borderTintState === "right"
      ? (["#00BFA6", "#121212"] as const)
      : borderTintState === "left"
      ? (["#FF4D6D", "#121212"] as const)
      : (["#00BFA620", "#242424"] as const);

  return {
    panResponder,
    animatedStyle,
    borderColors,
  };
}

