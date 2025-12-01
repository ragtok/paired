import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Navigation types for the root stack. Keep these close to the navigator so other
// modules can import the stack and the types without depending on `_layout.tsx`.
export type RootStackParamList = {
  Home: undefined;
  Details: { provider: string } | undefined;
  Settings: undefined;
  Profile: undefined;
  ContactSupport:
    | {
        user: {
          name: string;
          email: string;
        };
      }
    | undefined;
};

// Screen prop alias types — exported so screens/components can import them from
// the central navigation module instead of redeclaring them in multiple files.
export type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;
export type DetailsProps = NativeStackScreenProps<RootStackParamList, "Details">;
export type SettingsProps = NativeStackScreenProps<RootStackParamList, "Settings">;
export type ProfileProps = NativeStackScreenProps<RootStackParamList, "Profile">;
export type ContactSupportProps = NativeStackScreenProps<
  RootStackParamList,
  "ContactSupport"
>;

export const Stack = createNativeStackNavigator<RootStackParamList>();

export default Stack;
