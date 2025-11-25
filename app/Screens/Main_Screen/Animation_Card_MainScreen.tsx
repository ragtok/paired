import { Feather } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import { Animated, PanResponderInstance, Pressable, Text, View } from "react-native";
import type { ColorTuple } from "./GradientHelper_MainScreen";
import { cardStyles } from "./MainScreen.styles";
import type { TabType } from "./MainScreen.types";

interface Animation_Card_MainScreenProps {
  panResponder: PanResponderInstance;
  animatedStyle: Animated.AnimatedProps<any>;
  borderColors: ColorTuple;
  activeTab: TabType;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  promptText: string;
  onPrev: () => void;
  onNext: () => void;
}

export function Animation_Card_MainScreen({
  panResponder,
  animatedStyle,
  borderColors,
  activeTab,
  isFavorite,
  onToggleFavorite,
  promptText,
  onPrev,
  onNext,
}: Animation_Card_MainScreenProps) {
  return (
    <Animated.View {...panResponder.panHandlers} style={[cardStyles.cardShadow, animatedStyle]}>
      <LinearGradient
        colors={borderColors}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0.1 }}
        style={{ padding: 2, borderRadius: 18 }}
      >
        <BlurView intensity={50} tint="dark" style={cardStyles.cardInner}>
          <View style={cardStyles.topRow}>
            <View style={cardStyles.modePill}>
              <Text style={cardStyles.modePillText}>{activeTab}</Text>
            </View>
            <Pressable onPress={onToggleFavorite} hitSlop={10} style={cardStyles.favoriteBtn}>
              <Feather
                name="heart"
                size={20}
                color={isFavorite ? "#00BFA6" : "#6B6B6B"}
              />
            </Pressable>
          </View>

          <View style={cardStyles.centerWrap}>
            <Text style={cardStyles.promptText}>{promptText}</Text>
          </View>

          <View style={cardStyles.arrowsRow}>
            <Pressable onPress={onPrev} style={cardStyles.circleBtn}>
              <Feather name="chevron-left" size={18} color="#FF4D6D" />
            </Pressable>
            <Pressable onPress={onNext} style={cardStyles.circleBtn}>
              <Feather name="chevron-right" size={18} color="#00BFA6" />
            </Pressable>
          </View>

          <View style={cardStyles.hintPill}>
            <Text style={cardStyles.hintText}>Swipe right or left</Text>
          </View>
        </BlurView>
      </LinearGradient>
    </Animated.View>
  );
}

