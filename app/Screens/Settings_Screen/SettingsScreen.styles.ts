import { StyleSheet } from "react-native";

export const settingsStyles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#121212" },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 6,
    paddingBottom: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#1A1A1A",
  },
  headerTitle: { color: "#FFFFFF", fontSize: 22, fontWeight: "800" },

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

  container: { padding: 16 },

  group: {
    backgroundColor: "#141414",
    borderRadius: 14,
    padding: 12,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#1E1E1E",
  },
  groupTitle: {
    color: "#BEBEBE",
    fontSize: 13,
    marginBottom: 10,
    marginLeft: 4,
  },

  cardRow: {
    backgroundColor: "#1A1A1A",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#2A2A2A",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  rowLeft: { flexDirection: "row", alignItems: "center", gap: 12 },
  rowIconWrap: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.04)",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#2A2A2A",
  },
  rowTitle: { color: "#FFFFFF", fontSize: 16, fontWeight: "700" },
  rowSubtitle: { color: "#999", fontSize: 12, marginTop: 2 },

  chevWrap: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.03)",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#2A2A2A",
  },

  cardBox: {
    backgroundColor: "#1A1A1A",
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: "#2A2A2A",
  },
  appName: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 6,
  },
  appDesc: { color: "#B5B5B5", fontSize: 13, lineHeight: 18 },

  listRow: {
    backgroundColor: "#1A1A1A",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: "#2A2A2A",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  listRowText: { color: "#FFFFFF", fontSize: 15, fontWeight: "600" },
});

