import { useNavigation, useRoute } from "@react-navigation/native";
import type { HomeProps } from "./navigation";
import { SignInScreen } from "./Screens/Sign_In_Screen/Main_SignInScreen";

export default function Index() {
  const navigation = useNavigation<HomeProps["navigation"]>();
  const route = useRoute<HomeProps["route"]>();
  return <SignInScreen navigation={navigation} route={route} />;
}

