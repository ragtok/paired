import * as React from "react";
import { Text, TextInput } from "react-native";
import { contactStyles } from "./ContactSupportScreen.styles";

interface Input_Subject_ContactSupportProps {
  subject: string;
  setSubject: (value: string) => void;
  touched: Record<string, boolean>;
  setTouched: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
}

export function Input_Subject_ContactSupport({
  subject,
  setSubject,
  touched,
  setTouched,
}: Input_Subject_ContactSupportProps) {
  return (
    <>
      <Text style={contactStyles.label}>Subject</Text>
      <TextInput
        value={subject}
        onChangeText={setSubject}
        onBlur={() => setTouched((t) => ({ ...t, subject: true }))}
        placeholder="What can we help with?"
        placeholderTextColor="#6B6B6B"
        style={[
          contactStyles.input,
          touched.subject && subject.trim().length < 3 && contactStyles.inputError,
        ]}
      />
      {touched.subject && subject.trim().length < 3 ? (
        <Text style={contactStyles.errorText}>Please enter at least 3 characters.</Text>
      ) : null}
    </>
  );
}

