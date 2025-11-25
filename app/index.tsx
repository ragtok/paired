import { useNavigation, useRoute } from "@react-navigation/native";
import type { HomeProps } from "./navigation";
import { SignInScreen } from "./screens/sign in screen/sign-in-screen";

export default function Index() {
  const navigation = useNavigation<HomeProps["navigation"]>();
  const route = useRoute<HomeProps["route"]>();
  return <SignInScreen navigation={navigation} route={route} />;
}

