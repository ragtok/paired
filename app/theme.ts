import { DefaultTheme, Theme } from "@react-navigation/native";

export const MyDarkTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#121212",
    card: "#121212",
    text: "#FFFFFF",
    border: "#121212",
    primary: "#00BFA6",
  },
};

export default MyDarkTheme;
