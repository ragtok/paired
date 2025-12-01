import * as React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { ProfileProps } from "../../navigation";
import { Button_Save_ProfileScreen } from "./Button_Save_ProfileScreen";
import { Card_1_ProfileScreen } from "./Card_1_ProfileScreen";
import { Card_2_ProfileScreen } from "./Card_2_ProfileScreen";
import { Card_3_ProfileScreen } from "./Card_3_ProfileScreen";
import { Card_4_ProfileScreen } from "./Card_4_ProfileScreen";
import { Card_5_ProfileScreen } from "./Card_5_ProfileScreen";
import { useProfileScreenState } from "./Const_ProfileScreen";
import { Header_ProfileScreen } from "./Header_ProfileScreen";
import { ProfileScreenStyles } from "./ProfileScreen.styles";

// ---------- Screen (Profile) ----------
export function ProfileScreen({ navigation }: ProfileProps) {
  const {
    q1,
    setQ1,
    q2,
    setQ2,
    q3,
    setQ3,
    q4,
    setQ4,
    q5,
    toggleQ5,
    canSave,
  } = useProfileScreenState();

  return (
    <SafeAreaView style={ProfileScreenStyles.screen}>
      {/* Header */}
      <Header_ProfileScreen navigation={navigation} />

      <ScrollView contentContainerStyle={ProfileScreenStyles.container} showsVerticalScrollIndicator={false}>
        {/* Card 1 */}
        <Card_1_ProfileScreen q1={q1} setQ1={setQ1} />
        {/* Card 2 */}
        <Card_2_ProfileScreen q2={q2} setQ2={setQ2} />
        {/* Card 3 */}
        <Card_3_ProfileScreen q3={q3} setQ3={setQ3} />
        {/* Card 4 */}
        <Card_4_ProfileScreen q4={q4} setQ4={setQ4} />
        {/* Card 5 */}
        <Card_5_ProfileScreen q5={q5} toggleQ5={toggleQ5} />
        {/* Save */}
        <Button_Save_ProfileScreen
          canSave={canSave}
          navigation={navigation}
          q1={q1}
          q2={q2}
          q3={q3}
          q4={q4}
          q5={q5}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

