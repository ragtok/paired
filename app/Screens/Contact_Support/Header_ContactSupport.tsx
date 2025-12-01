import { Feather } from "@expo/vector-icons";
import * as React from "react";
import { Pressable, Text, View } from "react-native";
import type { ContactSupportProps } from "../../navigation";
import { contactStyles } from "./ContactSupportScreen.styles";

interface Header_ContactSupportProps {
  navigation: ContactSupportProps["navigation"];
}

export function Header_ContactSupport({ navigation }: Header_ContactSupportProps) {
  return (
    <View style={contactStyles.header}>
      <Pressable
        onPress={() => navigation.goBack()}
        hitSlop={10}
        style={({ pressed }) => [
          contactStyles.headerIconButton,
          pressed && contactStyles.headerIconButtonActive,
        ]}
      >
        <Feather name="arrow-left" size={22} color="#00BFA6" />
      </Pressable>
      <Text style={contactStyles.headerTitle}>Contact Support</Text>
      <View style={{ width: 40 }} />
    </View>
  );
}

