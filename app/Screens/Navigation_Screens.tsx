import * as React from "react";
import { Text, View } from "react-native";

// Minimal placeholders so modules importing `./screens` parse cleanly.
// Note: SignInScreen is exported from ./sign in screen/screens_fixed.tsx
export const MainScreen: React.FC = () => <View><Text>Main Screen</Text></View>;

export const SettingsScreen: React.FC = () => <View><Text>Settings Screen</Text></View>;
export const ProfileScreen: React.FC = () => <View><Text>Profile Screen</Text></View>;
export const ContactSupportScreen: React.FC = () => <View><Text>Contact Support Screen</Text></View>;

export default {
  MainScreen,
  SettingsScreen,
  ProfileScreen,
  ContactSupportScreen,
};

