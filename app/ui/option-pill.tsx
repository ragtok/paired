import { Feather } from "@expo/vector-icons";
import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface OptionGridProps {
  children?: React.ReactNode;
}

export const OptionGrid: React.FC<OptionGridProps> = ({ children }) => {
  return <View style={styles.grid}>{children}</View>;
};

interface OptionPillProps {
  icon: string;
  label: string;
  selected?: boolean;
  onPress?: () => void;
  multi?: boolean;
}

export const OptionPill: React.FC<OptionPillProps> = ({ icon, label, selected, onPress, multi = false }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }: { pressed: boolean }) => [
        styles.pill,
        selected && styles.pillSelected,
        pressed && styles.pillPressed,
      ]}
    >
      <Feather
        name={icon as any}
        size={16}
        color={selected ? "#00BFA6" : "#B5B5B5"}
        style={{ marginRight: 8 }}
      />
      <Text style={[styles.pillText, selected && { color: "#00BFA6" }]}>
        {label}
      </Text>
      {/* {multi ? (
        <View
          style={[
            styles.checkDot,
            selected && styles.checkDotOn,
          ]}
        />
      ) : null} */}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    gap: 10,
  },
  pill: {
    alignSelf: "flex-start",
    maxWidth: "100%",
    minHeight: 44,
    borderRadius: 12,
    backgroundColor: "#232323",
    borderWidth: 1,
    borderColor: "#2A2A2A",
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  pillSelected: {
    borderColor: "#00BFA6",
    backgroundColor: "#1C1F1F",
  },
  pillPressed: {
    backgroundColor: "#262626",
  },
  pillText: {
    color: "#E6E6E6",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    flexShrink: 1,
  },
  checkDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 8,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#444",
  },
  checkDotOn: {
    backgroundColor: "#00BFA6",
    borderColor: "#00BFA6",
  },
});

export default OptionPill;
