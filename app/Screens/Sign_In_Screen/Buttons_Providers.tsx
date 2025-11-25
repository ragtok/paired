import * as React from "react";
import { Image, Pressable, Text } from "react-native";
import GradientBorder from "../../GradientBorder";
import { signInStyles } from "./SignInScreen.styles";

interface Buttons_ProvidersProps {
  providers: string[];
  providerIcons: Record<string, any>;
  onSelect: (provider: string) => void;
}

export function Buttons_Providers({ providers, providerIcons, onSelect }: Buttons_ProvidersProps) {
  return (
    <>
      {providers.map((p) => (
        <GradientBorder key={p} style={[signInStyles.fullWidth, { marginBottom: 12 }]}>
          <Pressable
            style={signInStyles.button}
            onPress={() => onSelect(p)}
          >
            <Image source={providerIcons[p]} style={signInStyles.buttonIcon} />
            <Text style={signInStyles.buttonText}>{p}</Text>
          </Pressable>
        </GradientBorder>
      ))}
    </>
  );
}
