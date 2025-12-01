import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import type { HomeProps } from "../../Navigation/navigation";
import { Buttons_Providers } from "./Buttons_Providers";
import { Footer_SignInScreen } from "./Footer_SignInScreen";
import { SignInScreenHeader } from "./Header_SignInScreen";
import { signInStyles } from "./SignInScreen.styles";

export const SignInScreen: React.FC<HomeProps> = ({ navigation }) => {
  const providers = ["Google", "Instagram", "Apple ID"];
  const providerIcons: Record<string, any> = {
    Google: require("../../../assets/images/social_google.png"), 
    Instagram: require("../../../assets/images/social_instagram.png"), 
    "Apple ID": require("../../../assets/images/social_apple.png"), 
  };

  return (
    <SafeAreaView style={signInStyles.screen}>
      <StatusBar style="light" backgroundColor="#121212" animated />

      <View style={signInStyles.content}>
        <SignInScreenHeader />
        <Buttons_Providers
          providers={providers}
          providerIcons={providerIcons}
          onSelect={(provider: string) =>
            navigation.navigate("Details", { provider })
          }
        />
      </View>

      <Footer_SignInScreen />
    </SafeAreaView>
  );
};
