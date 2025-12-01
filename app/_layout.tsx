import * as React from "react";
import { StyleSheet } from "react-native";
import { Stack } from "./navigation";
import { MainScreen } from "./Screens/Main_Screen/MainScreen";
import { ContactSupportScreen } from "./Screens/Navigation_Screens";
import { ProfileScreen } from "./Screens/Profile_Screen/ProfileScreen";
import { SettingsScreen } from "./Screens/Settings_Screen/SettingsScreen";
import { SignInScreen } from "./Screens/Sign_In_Screen/Main_SignInScreen";

export default function App() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        animation: "none",
        contentStyle: { backgroundColor: "#121212" },
        headerStyle: { backgroundColor: "#121212" },
        freezeOnBlur: true,
      }}
    >
      <Stack.Screen 
        name="Home" 
        component={SignInScreen}
      />
      <Stack.Screen name="Details" component={MainScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="ContactSupport" component={ContactSupportScreen} />
    </Stack.Navigator>
  );
}


// (Removed duplicate small `styles` block — the full `styles` object is defined later in the file.)






// ---------- Styles ----------
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#121212" },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  appName: { color: "#FFFFFF", fontSize: 14, opacity: 0.9 },
  gradientBorder: { padding: 2, borderRadius: 10 },
  innerBox: { backgroundColor: "#121212", borderRadius: 8 },
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
  separator: {
    marginVertical: 10,
    borderBottomColor: "#737373",
    alignSelf: "stretch",
    opacity: 0.4,
  },
  header: {
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#121212",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  headerMenuButton: { marginRight: -40 },
  headerLogo: { width: 40, height: 40, resizeMode: "contain" },
  footer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  footerText: { color: "#999", textAlign: "center", fontSize: 12 },
  link: { color: "#00BFA6" },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    width: "90%",
    columnGap: 20,
    marginTop: 50,
    marginBottom: 8,
  },
  tabButtonWrapper: { flex: 1, borderRadius: 10 },
  tabButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderRadius: 10,
  },
  tabButtonActive: { backgroundColor: "#1A1A1A" },
  tabButtonText: { color: "#FFFFFF", fontSize: 15, fontWeight: "600" },
  tabButtonTextActive: { color: "#00BFA6" },
  tabButtonActiveBorder: {
    borderWidth: 1,
    borderColor: "#00BFA6",
    borderRadius: 10,
  },
  rerollButton: {
    padding: 7, // was 6 → ~5% bigger overall
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.03)",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#2A2A2A",
    alignItems: "center",
    justifyContent: "center",
  },
  rerollButtonActive: {
    backgroundColor: "rgba(0,191,166,0.2)",
    borderColor: "#00BFA6",
  },
});



// ------------- Screen (Contact Support) style

const contactStyles = StyleSheet.create({
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
    width: 50,
    height: 50,
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

  container: { padding: 16, paddingBottom: 24 },

  card: {
    backgroundColor: "#1A1A1A",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#2A2A2A",
    padding: 14,
    marginBottom: 18,
  },
  cardIntro: {
    color: "#DADADA",
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 10,
  },
  caption: {
    color: "#9A9A9A",
    fontSize: 12,
    marginBottom: 14,
  },

  label: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
    marginBottom: 6,
    marginTop: 10,
  },
  input: {
    backgroundColor: "#232323",
    color: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#2A2A2A",
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  inputError: {
    borderColor: "#FF4D6D",
  },
  textarea: {
    minHeight: 140,
    paddingTop: 12,
  },

  counterRow: {
    marginTop: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  hintText: { color: "#9A9A9A", fontSize: 12 },
  counterText: { color: "#B5B5B5", fontSize: 12 },

  submitBtn: {
    height: 48,
    borderRadius: 999,
    backgroundColor: "#171717",
    borderWidth: 1,
    borderColor: "#2A2A2A",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },
  submitBtnPressed: {
    backgroundColor: "#1E1E1E",
  },
  submitBtnDisabled: {
    opacity: 0.6,
  },
  submitText: {
    color: "#FFFFFF",
    fontWeight: "700",
  },

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
  submitWrap: {
    width: "70%",
    alignSelf: "center",
  },
  submitGradient: {
    padding: 2,
    borderRadius: 10,
  },
  successPopup: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1A1A1A",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#00BFA6",
    paddingVertical: 12,
    paddingHorizontal: 18,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 8,
  },
  successText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.45)",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    // keep above everything
    zIndex: 999,
  },
  overlayCard: {
    width: "100%",
    maxWidth: 420,
    backgroundColor: "#1A1A1A",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#2A2A2A",
    padding: 16,
    alignItems: "center",
  },
  overlayTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 4,
    textAlign: "center",
  },
  overlayMsg: {
    color: "#B5B5B5",
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
  },
  modalOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.7)",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 99,
  },

  modalCard: {
    backgroundColor: "#1A1A1A",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#2A2A2A",
    width: "80%",
    paddingVertical: 28,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 10,
  },

  modalTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 8,
    textAlign: "center",
  },

  modalSubtitle: {
    color: "#B5B5B5",
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
    marginHorizontal: 8,
  },
});
