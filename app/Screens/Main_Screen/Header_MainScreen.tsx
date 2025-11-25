import { Feather } from "@expo/vector-icons";
import * as React from "react";
import { Image, Pressable, View } from "react-native";
import type { DetailsProps } from "../../navigation";
import { Separator } from "../../sharedUI";
import { mainScreenStyles } from "./MainScreen.styles";

interface Header_MainScreenProps {
  navigation: DetailsProps["navigation"];
}

export function Header_MainScreen({ navigation }: Header_MainScreenProps) {
  return (
    <>
      <Separator />
      <View style={mainScreenStyles.header}>
        <Image
          source={require("../../../assets/images/pairedApp_Logo.png")}
          style={mainScreenStyles.headerLogo}
        />
        <Pressable
          onPress={() => navigation.navigate("Settings")}
          style={mainScreenStyles.headerMenuButton}
        >
          <Feather name="menu" size={35} color="#00BFA6" />
        </Pressable>
      </View>
    </>
  );
}

