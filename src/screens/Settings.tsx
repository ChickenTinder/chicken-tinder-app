import AppLoading from "expo-app-loading";
import React from "react";
import { StatusBar } from "expo-status-bar";

// Components
import {
  Avatar,
  ButtonText,
  InnerContainer,
  PageTitle,
  StyledButton,
  StyledContainer,
  StyledFormArea,
  SubTitle,
  WelcomeContainer,
} from "../components/styles";

// Fonts
import { useFonts, Asap_600SemiBold } from "@expo-google-fonts/asap";
import { Quicksand_700Bold } from "@expo-google-fonts/quicksand";

const Settings = () => {
  const [fontsLoaded] = useFonts({
    Asap_600SemiBold,
    Quicksand_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <StyledContainer>
        <InnerContainer>
          <WelcomeContainer>
            <PageTitle welcome={true} style={{ fontFamily: "Asap_600SemiBold" }}>
              Settings
            </PageTitle>
            <SubTitle welcome={true} style={{ fontFamily: "Quicksand_700Bold" }}>
              Just Doe
            </SubTitle>
            <SubTitle welcome={true} style={{ fontFamily: "Quicksand_700Bold" }}>
              example@email.com
            </SubTitle>
            <StyledFormArea>
              <Avatar
                resizeMode="cover"
                source={require("../../assets/img/chickenTinderAvatar.png")}
              />
              <StyledButton onPress={() => undefined}>
                <ButtonText style={{ fontFamily: "Asap_600SemiBold" }}>Sign Out</ButtonText>
              </StyledButton>
            </StyledFormArea>
          </WelcomeContainer>
        </InnerContainer>
        <StatusBar style="auto" />
      </StyledContainer>
    );
  }
};

export default Settings;
