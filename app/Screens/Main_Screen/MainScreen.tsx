import * as React from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GradientBorder from "../../ui/GradientBorder";
import type { DetailsProps } from "../../Navigation/navigation";
import { Separator } from "../../ui/sharedUI";
import { Animation_Card_MainScreen } from "./Animation_Card_MainScreen";
import { Button_Reroll_MainScreen } from "./Button_Reroll_MainScreen";
import { Buttons_Action_MainScreen } from "./Buttons_Action_MainScreen";
import { useMainScreenState } from "./Const_MainScreen";
import { Footer_MainScreen } from "./Footer_MainScreen";
import { useMainScreenHandlers } from "./Handlers_MainScreen";
import { Header_MainScreen } from "./Header_MainScreen";
import { mainScreenStyles } from "./MainScreen.styles";

// ---------- Screen (Main Screen) ----------
export function MainScreen({ route, navigation }: DetailsProps) {
  // const provider = route?.params?.provider; // (unused but fine)
  const {
    activeTab,
    setActiveTab,
    index,
    setIndex,
    favorites,
    setFavorites,
    borderTintState,
    setBorderTintState,
  } = useMainScreenState();

  const {
    currentPrompts,
    isRerollPressed,
    setIsRerollPressed,
    onReroll,
    onPrev,
    onNext,
    onToggleFavorite,
    panResponder,
    animatedStyle,
    borderColors,
  } = useMainScreenHandlers({
    activeTab,
    index,
    setIndex,
    favorites,
    setFavorites,
    borderTintState,
    setBorderTintState,
  });

  return (
    <SafeAreaView style={mainScreenStyles.screen}>
      <View style={[mainScreenStyles.content, { paddingHorizontal: 24 }]}>
        <Header_MainScreen navigation={navigation} />

        <Buttons_Action_MainScreen activeTab={activeTab} setActiveTab={setActiveTab} />

        <Separator />

        {/* ---------- Animated Card ---------- */}
        <Animation_Card_MainScreen
          panResponder={panResponder}
          animatedStyle={animatedStyle}
          borderColors={borderColors}
          activeTab={activeTab}
          isFavorite={favorites[index]}
          onToggleFavorite={onToggleFavorite}
          promptText={currentPrompts[index]}
          onPrev={onPrev}
          onNext={onNext}
        />

        <Separator />

        {/* ---------- Reroll Icon Button ---------- */}
        <Button_Reroll_MainScreen
          isRerollPressed={isRerollPressed}
          setIsRerollPressed={setIsRerollPressed}
          onReroll={onReroll}
        />

        <Separator />

{/* ---------- REMOVE THIS BUTTON AFTER TESTING ---------- */}
        <GradientBorder style={{ width: "70%" }}>
          <Pressable style={mainScreenStyles.button} onPress={() => navigation.goBack()}>
            <Text style={mainScreenStyles.buttonText}>← Go back (remove)</Text>
          </Pressable>
        </GradientBorder>
{/* ---------- REMOVE THIS AFTER TESTING ---------- */}

        <Footer_MainScreen />
      </View>
    </SafeAreaView>
  );
}

