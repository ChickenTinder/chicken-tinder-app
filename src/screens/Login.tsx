import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

// Components
import {
  ButtonText,
  Colors,
  ExtraView,
  InnerContainer,
  MsgBox,
  PageLogo,
  PageTitle,
  StyledButton,
  StyledContainer,
  StyledFormArea,
  StyledSocialsContainer,
  StyledSocialsLabel,
  SubTitle,
  TextLink,
  TextLinkContent,
} from "../components/styles";

// Colors
const { xandu, cultured } = Colors;

// Fonts
import { useFonts, Asap_600SemiBold } from "@expo-google-fonts/asap";
import { Quicksand_700Bold } from "@expo-google-fonts/quicksand";

// Formik
import { Formik } from "formik";

// Icons
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { Fontisto } from "@expo/vector-icons";

// Keyboard avoiding view
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";
import { UserTextInput } from "../components/UserTextInput";

const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [fontsLoaded] = useFonts({
    Asap_600SemiBold,
    Quicksand_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <KeyboardAvoidingWrapper>
        <StyledContainer>
          <InnerContainer>
            <PageLogo resizeMode="cover" source={require("../../assets/img/chickenTinder.png")} />
            <PageTitle style={{ fontFamily: "Asap_600SemiBold" }}>Chicken Tinder</PageTitle>
            <SubTitle style={{ fontFamily: "Quicksand_700Bold" }}>Sign In</SubTitle>

            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <StyledFormArea>
                  <UserTextInput
                    label="Email"
                    icon={faEnvelope}
                    placeholder="example@email.com"
                    placeholderTextColor={xandu}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    keyboardType="email-address"
                  />

                  <UserTextInput
                    label="Password"
                    icon={faLock}
                    placeholder="**********"
                    placeholderTextColor={xandu}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    secureTextEntry={hidePassword}
                    isPassword={true}
                    hidePassword={hidePassword}
                    setHidePassword={setHidePassword}
                    style={{ fontFamily: "Asap_600SemiBold" }}
                  />
                  <MsgBox>...</MsgBox>
                  <StyledButton onPress={(e) => handleSubmit(e as any)}>
                    <ButtonText style={{ fontFamily: "Asap_600SemiBold" }}>Sign In</ButtonText>
                  </StyledButton>
                  <StyledSocialsLabel>or use one of your social profiles</StyledSocialsLabel>
                  <StyledSocialsContainer>
                    <StyledButton google={true} onPress={(e) => handleSubmit(e as any)}>
                      <Fontisto name="google" color={cultured} size={25} />
                      <ButtonText google={true} style={{ fontFamily: "Asap_600SemiBold" }}>
                        Google
                      </ButtonText>
                    </StyledButton>
                    <StyledButton facebook={true} onPress={(e) => handleSubmit(e as any)}>
                      <Fontisto name="facebook" color={cultured} size={25} />
                      <ButtonText facebook={true} style={{ fontFamily: "Asap_600SemiBold" }}>
                        Facebook
                      </ButtonText>
                    </StyledButton>
                  </StyledSocialsContainer>
                  <ExtraView>
                    <TextLink>
                      <TextLinkContent style={{ fontFamily: "Asap_600SemiBold" }}>
                        Forgot Password?
                      </TextLinkContent>
                    </TextLink>
                    <TextLink>
                      <TextLinkContent signup={true} style={{ fontFamily: "Asap_600SemiBold" }}>
                        Sign Up
                      </TextLinkContent>
                    </TextLink>
                  </ExtraView>
                </StyledFormArea>
              )}
            </Formik>
          </InnerContainer>
          <StatusBar style="auto" />
        </StyledContainer>
      </KeyboardAvoidingWrapper>
    );
  }
};

export default Login;
