import * as React from "react";
import { Linking, Text, View } from "react-native";
import { signInStyles } from "./SignInScreen.styles";

export function Footer_SignInScreen() {
  return (
    <>
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
    </>
  );
}

