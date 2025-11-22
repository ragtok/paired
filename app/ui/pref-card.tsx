import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import type { PrefCardProps } from "../types";

// Minimal local styles used by PrefCard to keep it self-contained.
export const PrefCard: React.FC<PrefCardProps> = ({ number, title, children }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.numBadge}>
          <Text style={styles.numBadgeText}>{number}</Text>
        </View>
        <Text style={styles.cardTitle}>{title}</Text>
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1A1A1A",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#2A2A2A",
    padding: 14,
    marginBottom: 16,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  numBadge: {
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,191,166,0.15)",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#00BFA6",
    marginRight: 10,
  },
  numBadgeText: { color: "#00BFA6", fontWeight: "700", fontSize: 12 },
  cardTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
    flex: 1,
    lineHeight: 22,
  },
});

export default PrefCard;
