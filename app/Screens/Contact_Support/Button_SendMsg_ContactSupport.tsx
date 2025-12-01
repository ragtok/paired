import { Feather } from "@expo/vector-icons";
import * as React from "react";
import { Pressable, Text, View } from "react-native";
import GradientBorder from "../../GradientBorder";
import { contactStyles } from "./ContactSupportScreen.styles";

interface Button_SendMsg_ContactSupportProps {
  canSubmit: boolean;
  isSending: boolean;
  onSubmit: () => void;
}

export function Button_SendMsg_ContactSupport({
  canSubmit,
  isSending,
  onSubmit,
}: Button_SendMsg_ContactSupportProps) {
  return (
    <View style={{ marginTop: 14 }}>
      <GradientBorder style={contactStyles.submitWrap}>
        <Pressable onPress={onSubmit} disabled={!canSubmit || isSending} style={contactStyles.button}>
          <Feather
            name="send"
            size={18}
            color={canSubmit ? "#00BFA6" : "#6B6B6B"}
            style={contactStyles.buttonIcon}
          />
          <Text style={[contactStyles.buttonText, !canSubmit && { color: "#6B6B6B" }]}>
            {isSending ? "Sending…" : "Send message"}
          </Text>
        </Pressable>
      </GradientBorder>
    </View>
  );
}

