import * as React from "react";
import { Text, TextInput, View } from "react-native";
import { MAX_MESSAGE } from "./Const_ContactSupport";
import { contactStyles } from "./ContactSupportScreen.styles";

interface Input_Msg_ContactSupportProps {
  message: string;
  setMessage: (value: string) => void;
  touched: Record<string, boolean>;
  setTouched: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
}

export function Input_Msg_ContactSupport({
  message,
  setMessage,
  touched,
  setTouched,
}: Input_Msg_ContactSupportProps) {
  return (
    <>
      <Text style={contactStyles.label}>Message</Text>
      <TextInput
        value={message}
        onChangeText={(txt) => (txt.length <= MAX_MESSAGE ? setMessage(txt) : null)}
        onBlur={() => setTouched((t) => ({ ...t, message: true }))}
        placeholder="Describe the issue or share your feedback…"
        placeholderTextColor="#6B6B6B"
        multiline
        textAlignVertical="top"
        style={[
          contactStyles.input,
          contactStyles.textarea,
          touched.message && message.trim().length < 10 && contactStyles.inputError,
        ]}
      />
      <View style={contactStyles.counterRow}>
        <Text style={contactStyles.hintText}>Min 10 characters • Be as specific as you can</Text>
        <Text style={contactStyles.counterText}>{message.length}/{MAX_MESSAGE}</Text>
      </View>
    </>
  );
}

