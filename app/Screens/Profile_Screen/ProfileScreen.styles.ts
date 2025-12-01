import { StyleSheet } from "react-native";

export const ProfileScreenStyles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#121212" },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 6,
    paddingBottom: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#1A1A1A",
  },
  headerTitle: { color: "#FFFFFF", fontSize: 20, fontWeight: "800" },
  headerSubtitle: { color: "#9A9A9A", fontSize: 12, marginTop: 2 },

  headerIconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.03)",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#2A2A2A",
  },
  headerIconButtonActive: {
    backgroundColor: "rgba(0,191,166,0.2)",
    borderColor: "#00BFA6",
  },

  container: { padding: 12, paddingBottom: 24 },

  hint: { color: "#9A9A9A", fontSize: 12, marginBottom: 8, marginLeft: 4 },

  saveBtn: {
    marginTop: 8,
    height: 48,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#2A2A2A",
    backgroundColor: "#171717",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },
  saveBtnDisabled: {
    opacity: 0.6,
  },
  saveBtnText: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
});

