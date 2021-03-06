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
import { faEnvelope, faLock, faMapMarkerAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { Fontisto } from "@expo/vector-icons";

// Keyboard avoiding view
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";
import { UserTextInput } from "../components/UserTextInput";

const Signup = () => {
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
            <SubTitle style={{ fontFamily: "Quicksand_700Bold" }}>Sign Up</SubTitle>
            <Formik
              initialValues={{
                fullName: "",
                email: "",
                zipCode: "",
                password: "",
                confirmPassword: "",
              }}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <StyledFormArea>
                  <UserTextInput
                    label="Full Name"
                    icon={faUser}
                    placeholder="Just Doe"
                    placeholderTextColor={xandu}
                    onChangeText={handleChange("fullName")}
                    onBlur={handleBlur("fullName")}
                    value={values.fullName}
                  />

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
                    label="Zip Code"
                    icon={faMapMarkerAlt}
                    placeholder="######"
                    placeholderTextColor={xandu}
                    onChangeText={handleChange("zipCode")}
                    onBlur={handleBlur("zipCode")}
                    value={values.zipCode}
                    keyboardType="numeric"
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

                  <UserTextInput
                    label="Confirm Password"
                    icon={faLock}
                    placeholder="**********"
                    placeholderTextColor={xandu}
                    onChangeText={handleChange("confirmPassword")}
                    onBlur={handleBlur("confirmPassword")}
                    value={values.confirmPassword}
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
                  <ExtraView signin={true}>
                    <TextLinkContent style={{ fontFamily: "Asap_600SemiBold" }}>
                      Already have an account?
                    </TextLinkContent>
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

export default Signup;
