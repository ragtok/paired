import * as React from "react";
import { Pressable, Text, View } from "react-native";
import GradientBorder from "../../ui/GradientBorder";
import type { ContactSupportProps } from "../../Navigation/navigation";
import { Separator } from "../../ui/sharedUI";
import { contactStyles } from "./ContactSupportScreen.styles";

interface Info_Msg_ContactSupportProps {
  showSuccess: boolean;
  setShowSuccess: (value: boolean) => void;
  navigation: ContactSupportProps["navigation"];
}

export function Info_Msg_ContactSupport({
  showSuccess,
  setShowSuccess,
  navigation,
}: Info_Msg_ContactSupportProps) {
  if (!showSuccess) return null;

  return (
    <View style={contactStyles.modalOverlay}>
      <View style={contactStyles.modalCard}>
        <Text style={contactStyles.modalTitle}>Message Sent!</Text>
        <Text style={contactStyles.modalSubtitle}>
          Thanks for reaching out — our team will get back to you soon.
        </Text>

        <Separator />

        <GradientBorder style={{ width: "70%" }}>
          <Pressable
            style={contactStyles.button}
            onPress={() => {
              setShowSuccess(false);
              navigation.goBack();
            }}
          >
            <Text style={contactStyles.buttonText}>OK</Text>
          </Pressable>
        </GradientBorder>
      </View>
    </View>
  );
}

