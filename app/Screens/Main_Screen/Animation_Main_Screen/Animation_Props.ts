export interface UseMainScreenAnimationProps {
  borderTintState: "default" | "left" | "right";
  setBorderTintState: (state: "default" | "left" | "right") => void;
  onNext: () => void;
  onPrev: () => void;
}

