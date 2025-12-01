import * as React from "react";
import { Pressable, Text, View } from "react-native";
import GradientBorder from "../../ui/GradientBorder";
import { mainScreenStyles } from "./MainScreen.styles";
import type { TabType } from "./MainScreen.types";

interface Buttons_Action_MainScreenProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export function Buttons_Action_MainScreen({
  activeTab,
  setActiveTab,
}: Buttons_Action_MainScreenProps) {
  return (
    <View style={mainScreenStyles.tabContainer}>
      {(["Questions", "Things to Do"] as TabType[]).map((tab) => (
        <GradientBorder
          key={tab}
          style={[
            mainScreenStyles.tabButtonWrapper,
            activeTab === tab && mainScreenStyles.tabButtonActiveBorder,
          ]}
        >
          <Pressable
            style={[mainScreenStyles.tabButton, activeTab === tab && mainScreenStyles.tabButtonActive]}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={[
                mainScreenStyles.tabButtonText,
                activeTab === tab && mainScreenStyles.tabButtonTextActive,
              ]}
            >
              {tab}
            </Text>
          </Pressable>
        </GradientBorder>
      ))}
    </View>
  );
}

