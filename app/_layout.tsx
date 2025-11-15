import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import * as React from "react";
import {
  Dimensions,
  StyleSheet,
  View
} from "react-native";



// ---------- Navigation Types ----------
type RootStackParamList = {
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

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;
type DetailsProps = NativeStackScreenProps<RootStackParamList, "Details">;
type SettingsProps = NativeStackScreenProps<RootStackParamList, "Settings">;
type ProfileProps = NativeStackScreenProps<RootStackParamList, "Profile">;
type ContactSupportProps = NativeStackScreenProps<
  RootStackParamList,
  "ContactSupport"
>;

// ---------- Shared UI ----------
const Stack = createNativeStackNavigator<RootStackParamList>();
const { height: screenHeight } = Dimensions.get("window");

const varLoggedInUserName = "Mike Oxsmall";
const varLoggedInUserEmail = "mike.oxsmall@example.com";

const Separator: React.FC = () => <View style={styles.separator} />;
const varAppName = "CODE MOKEYS";
const varAppVersion = "v1.0.0";

const MyDarkTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#121212",
    card: "#121212",
    text: "#FFFFFF",
    border: "#121212",
    primary: "#00BFA6",
  },
};

const SignInScreen = () => null;
const MainScreen = () => null;
const SettingsScreen = () => null;
const ProfileScreen = () => null;
const ContactSupportScreen = () => null;

// ---------- App entry ----------
export default function App() {
  return (
    <NavigationContainer theme={MyDarkTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "none",
          contentStyle: { backgroundColor: "#121212" },
          headerStyle: { backgroundColor: "#121212" },
          freezeOnBlur: true,
        }}
      >
        <Stack.Screen name="Home" component={SignInScreen} />
        <Stack.Screen name="Details" component={MainScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="ContactSupport" component={ContactSupportScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#121212" },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
separator: {
    marginVertical: 10,
    borderBottomColor: "#737373",
    alignSelf: "stretch",
    opacity: 0.4,
  }
})