import { StyleSheet } from "react-native";

export const signInStyles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#121212" },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  heading: { color: "#FFFFFF", fontSize: 18, fontWeight: "600" },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 15,
    gap: 10,
  },
  buttonIcon: {
    width: 22,
    height: 22,
    resizeMode: "contain",
    marginRight: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  fullWidth: { width: "70%", alignSelf: "center" },
  footer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  footerText: { color: "#999", textAlign: "center", fontSize: 12 },
  link: { color: "#00BFA6" },
});
