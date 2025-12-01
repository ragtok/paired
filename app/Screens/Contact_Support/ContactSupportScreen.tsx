import * as React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { ContactSupportProps } from "../../navigation";
import { Button_SendMsg_ContactSupport } from "./Button_SendMsg_ContactSupport";
import { useContactSupportState } from "./Const_ContactSupport";
import { contactStyles } from "./ContactSupportScreen.styles";
import { Header_ContactSupport } from "./Header_ContactSupport";
import { Info_Msg_ContactSupport } from "./Info_MsgPopUp_ContactSupport";
import { Input_Msg_ContactSupport } from "./Input_Msg_ContactSupport";
import { Input_Subject_ContactSupport } from "./Input_Subject_ContactSupport";
import { Links_Helpful_ContactSupport } from "./Links_Helpful_ContactSupport";

// ---------- Screen (Contact Support) ----------
export function ContactSupportScreen({ navigation, route }: ContactSupportProps) {
  const {
    subject,
    setSubject,
    message,
    setMessage,
    isSending,
    touched,
    setTouched,
    canSubmit,
    showSuccess,
    setShowSuccess,
    onSubmit,
  } = useContactSupportState(route);

  return (
    <SafeAreaView style={contactStyles.screen}>
      {/* Header */}
      <Header_ContactSupport navigation={navigation} />

      <ScrollView
        style={{ backgroundColor: "#121212" }}
        contentContainerStyle={contactStyles.container}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Info_Msg_ContactSupport
          showSuccess={showSuccess}
          setShowSuccess={setShowSuccess}
          navigation={navigation}
        />

        {/* Card */}
        <View style={contactStyles.card}>
          <Text style={contactStyles.cardIntro}>
            Tell us what's up — we'll get back to you as soon as possible.
          </Text>

          {/* Subject */}
          <Input_Subject_ContactSupport
            subject={subject}
            setSubject={setSubject}
            touched={touched}
            setTouched={setTouched}
          />

          {/* Message */}
          <Input_Msg_ContactSupport
            message={message}
            setMessage={setMessage}
            touched={touched}
            setTouched={setTouched}
          />

          {/* Submit */}
          <Button_SendMsg_ContactSupport
            canSubmit={canSubmit}
            isSending={isSending}
            onSubmit={onSubmit}
          />
        </View>

        {/* Help links */}
        <Links_Helpful_ContactSupport />

        <View style={{ height: 16 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

