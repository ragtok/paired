import { Feather } from "@expo/vector-icons";
import * as React from "react";
import { useState } from "react";
import { Linking, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, type SettingsProps } from "./navigation";
import { MainScreen } from "./Screens/Main_Screen/MainScreen";
import { ContactSupportScreen, ProfileScreen } from "./Screens/Navigation_Screens";
import { SignInScreen } from "./Screens/Sign_In_Screen/Main_SignInScreen";
import { varAppName, varAppVersion, varLoggedInUserEmail, varLoggedInUserName } from "./sharedUI";


// ---------- Screen (Settings) ----------
export function SettingsScreen({ navigation }: SettingsProps) {
  const [notifications, setNotifications] = useState<boolean>(true);
  const [darkMode, setDarkMode] = useState<boolean>(true);

  return (
    <SafeAreaView style={styles.screen}>
      {/* Header */}
      <View style={settingsStyles.header}>
        <Pressable
          onPress={() => navigation.goBack()}
          hitSlop={10}
          style={({ pressed }) => [
            settingsStyles.headerIconButton,
            pressed && settingsStyles.headerIconButtonActive,
          ]}
        >
          <Feather name="arrow-left" size={22} color="#00BFA6" />
        </Pressable>
        <Text style={settingsStyles.headerTitle}>Settings</Text>
        <View style={{ width: 40 }} />
      </View>

      {/* Content */}
      <View style={settingsStyles.container}>
        {/* Preferences */}
        <View style={settingsStyles.group}>
          {/* Profile */}
          <Pressable
            style={settingsStyles.cardRow}
            android_ripple={{ color: "#1a1a1a" }}
            onPress={() => navigation.navigate("Profile")}
          >
            <View style={settingsStyles.rowLeft}>
              <View style={settingsStyles.rowIconWrap}>
                <Feather name="user-check" size={18} color="#00BFA6" />
              </View>
              <View>
                <Text style={settingsStyles.rowTitle}>Profile</Text>
                <Text style={settingsStyles.rowSubtitle}>Personalize your experience</Text>
              </View>
            </View>
            <Feather name="chevron-right" size={18} color="#6B6B6B" />
          </Pressable>

          {/* Notifications */}
          <Pressable
            style={settingsStyles.cardRow}
            android_ripple={{ color: "#1a1a1a" }}
            onPress={() => setNotifications(!notifications)}
          >
            <View style={settingsStyles.rowLeft}>
              <View style={settingsStyles.rowIconWrap}>
                <Feather name="bell" size={18} color="#00BFA6" />
              </View>
              <View>
                <Text style={settingsStyles.rowTitle}>Notifications</Text>
                <Text style={settingsStyles.rowSubtitle}>
                  Get daily question or activity suggestions
                </Text>
              </View>
            </View>
            <Feather
              name={notifications ? "toggle-right" : "toggle-left"}
              size={36}
              color={notifications ? "#00BFA6" : "#6B6B6B"}
            />
          </Pressable>
        </View>

        {/* Support */}
        <View style={settingsStyles.group}>
          <Text style={settingsStyles.groupTitle}>Support</Text>
          <Pressable
            style={settingsStyles.listRow}
            onPress={() => Linking.openURL("https://yourwebsite.com/privacy")}
          >
            <Text style={settingsStyles.listRowText}>Privacy Policy</Text>
            <Feather name="external-link" size={16} color="#6B6B6B" />
          </Pressable>
          <Pressable
            style={settingsStyles.listRow}
            onPress={() => Linking.openURL("https://yourwebsite.com/terms")}
          >
            <Text style={settingsStyles.listRowText}>Terms of Service</Text>
            <Feather name="external-link" size={16} color="#6B6B6B" />
          </Pressable>
          {/* SettingsScreen → inside the Support group */}
          <Pressable
            style={settingsStyles.listRow}
            onPress={() =>
              navigation.navigate("ContactSupport", {
                user: { name: varLoggedInUserName, email: varLoggedInUserEmail },
              })
            }
          >
            <Text style={settingsStyles.listRowText}>Contact Support</Text>
            <Feather name="mail" size={16} color="#6B6B6B" />
          </Pressable>
        </View>

        {/* About */}
        <View style={settingsStyles.group}>
          <Text style={settingsStyles.groupTitle}>About</Text>
          <View style={settingsStyles.cardBox}>
            <Text style={settingsStyles.appName}>
              {varAppName} {varAppVersion}
            </Text>
            <Text style={settingsStyles.appDesc}>
              Discover engaging questions and activities to spark conversations and
              exploration - with more features coming soon.
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}





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

// settings screen style

const settingsStyles = StyleSheet.create({
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

// --------- Profile Screen Style -----------
const ProfileScreenStyles = StyleSheet.create({
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

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    gap: 10,
  },

  // Equal-size pill (2 columns)
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

  // tiny selection dot for multi-select
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
