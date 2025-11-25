import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Image, Linking, Pressable, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import GradientBorder from "../../GradientBorder";
import type { HomeProps } from "../../navigation";
import { Separator, varAppName } from "../../sharedUI";
import { signInStyles } from "./sign-in-screen.styles";


export const SignInScreen: React.FC<HomeProps> = ({ navigation }) => {
  const providers = ["Google", "Instagram", "Apple ID"];
  const providerIcons: Record<string, any> = {
    Google: require("../../../assets/images/icon.png"), // TODO: Replace with actual social_google.png
    Instagram: require("../../../assets/images/icon.png"), // TODO: Replace with actual social_instagram.png
    "Apple ID": require("../../../assets/images/icon.png"), // TODO: Replace with actual social_apple.png
  };

  return (
    <SafeAreaView style={signInStyles.screen}>
      <StatusBar style="light" backgroundColor="#121212" animated />

      <View style={signInStyles.content}>
        <Image source={require("../../../assets/images/icon.png")} style={{ width: 50, height: 50 }} />

        <Separator />
        <Text style={signInStyles.heading}>{varAppName}</Text>

        <Separator />
        <Text style={signInStyles.heading}>Sign in</Text>

        <Separator />

        {providers.map((p) => (
          <GradientBorder key={p} style={[signInStyles.fullWidth, { marginBottom: 12 }]}>
            <Pressable
              style={signInStyles.button}
              onPress={() => navigation.navigate("Details", { provider: p })}
            >
              <Image source={providerIcons[p]} style={signInStyles.buttonIcon} />
              <Text style={signInStyles.buttonText}>{p}</Text>
            </Pressable>
          </GradientBorder>
        ))}
      </View>

      <View style={signInStyles.footer}>
        <Text style={signInStyles.footerText}>
          By continuing, you agree to our{" "}
          <Text style={signInStyles.link} onPress={() => Linking.openURL("https://yourwebsite.com/terms")}>
            Terms of Service
          </Text>
          {" "}and{" "}
          <Text style={signInStyles.link} onPress={() => Linking.openURL("https://yourwebsite.com/privacy")}>Privacy Policy</Text>.
        </Text>
      </View>

      <View style={signInStyles.footer}>
        <Text style={signInStyles.footerText}>Code Monkeys</Text>
      </View>
    </SafeAreaView>
  );
};
