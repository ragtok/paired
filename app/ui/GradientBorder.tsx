import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import { ColorValue, StyleProp, StyleSheet, View, ViewStyle } from "react-native";

interface GradientBorderProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  colors?: string[] | ColorValue[];
  radius?: number;
}

export default function GradientBorder({
  children,
  style,
  colors = ["#00BFA6", "#242424"],
  radius = 10,
}: GradientBorderProps) {
  const innerRadius = Math.max(0, radius - 2);

  const locations =
    colors.length === 2
      ? [0, 0.25]
      : colors.map((_, i) => i / Math.max(1, colors.length - 1));

  return (
    <LinearGradient
      // LinearGradient typings are strict about tuple types; cast to any for safety
      colors={colors as any}
      locations={locations as any}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.2, y: 1 }}
      style={[styles.gradientBorder, { borderRadius: radius }, style]}
    >
      <View style={[styles.innerBox, { borderRadius: innerRadius }]}>
        {children}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientBorder: { padding: 2, borderRadius: 10 },
  innerBox: { backgroundColor: "#121212", borderRadius: 8 },
});
