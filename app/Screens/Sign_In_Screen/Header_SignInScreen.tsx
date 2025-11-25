import * as React from "react";
import { Image, Text } from "react-native";
import { Separator, varAppName } from "../../sharedUI";
import { signInStyles } from "./SignInScreen.styles";

export function SignInScreenHeader() {
  return (
    <>
      <Image
        source={require("../../../assets/images/pairedApp_Logo.png")}
        style={{ width: 50, height: 50 }}
      />
      <Separator />
      <Text style={signInStyles.heading}>{varAppName}</Text>
      <Separator />
      <Text style={signInStyles.heading}>Sign in</Text>
      <Separator />
    </>
  );
}
