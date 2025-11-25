import { Animated, PanResponder } from "react-native";

interface CreatePanResponderProps {
  position: Animated.ValueXY;
  borderTintState: "default" | "left" | "right";
  setBorderTintState: (state: "default" | "left" | "right") => void;
  onNext: () => void;
  onPrev: () => void;
}

export function createPanResponder({
  position,
  borderTintState,
  setBorderTintState,
  onNext,
  onPrev,
}: CreatePanResponderProps) {
  return PanResponder.create({
    onMoveShouldSetPanResponder: () => true,

    onPanResponderMove: (_, gesture) => {
      position.setValue({ x: gesture.dx, y: 0 });

      if (gesture.dx > 50) {
        if (borderTintState !== "right") setBorderTintState("right");
      } else if (gesture.dx < -50) {
        if (borderTintState !== "left") setBorderTintState("left");
      } else {
        if (borderTintState !== "default") setBorderTintState("default");
      }
    },

    onPanResponderRelease: (_, gesture) => {
      const shouldSwipe = Math.abs(gesture.dx) > 120;

      if (shouldSwipe) {
        const direction: "right" | "left" = gesture.dx > 0 ? "right" : "left";
        Animated.timing(position, {
          toValue: { x: direction === "right" ? 500 : -500, y: 0 },
          duration: 300,
          useNativeDriver: true,
        }).start(() => {
          direction === "right" ? onNext() : onPrev();
          position.setValue({ x: 0, y: 0 });
          setBorderTintState("default");
        });
      } else {
        setBorderTintState("default");
        Animated.spring(position, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: true,
        }).start();
      }
    },

    onPanResponderTerminate: () => {
      setBorderTintState("default");
      Animated.spring(position, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: true,
      }).start();
    },
  });
}

