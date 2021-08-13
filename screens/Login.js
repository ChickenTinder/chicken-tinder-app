import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native'

// Components
import {
  ButtonText,
  Colors,
  ExtraView,
  InnerContainer,
  LeftIcon,
  MsgBox,
  PageLogo,
  PageTitle,
  RightIcon,
  StyledButton,
  StyledContainer,
  StyledFormArea,
  StyledInputLabel,
  StyledSocialsContainer,
  StyledSocialsLabel,
  StyledTextInput,
  SubTitle,
  TextLink,
  TextLinkContent
} from './../components/styles'

// Colors
const { xandu, raisinBlack, cultured, google } = Colors;

// Fonts
import { useFonts, Asap_600SemiBold } from '@expo-google-fonts/asap';
import { Quicksand_700Bold } from '@expo-google-fonts/quicksand';

// Formik
import { Formik } from 'formik';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEnvelope, faEye, faEyeSlash, faLock } from '@fortawesome/free-solid-svg-icons'
import { Fontisto } from '@expo/vector-icons'

const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);
  let [fontsLoaded] = useFonts({
    Asap_600SemiBold,
    Quicksand_700Bold
  });

  if (!fontsLoaded) {
    return (
      <AppLoading />
    );
  } else {
    return (
      <StyledContainer>
        <InnerContainer>
          <PageLogo resizeMode="cover" source={require('./../assets/img/chickenTinder.png')} />
          <PageTitle style={{ fontFamily: "Asap_600SemiBold" }}>Chicken Tinder</PageTitle>
          <SubTitle style={{ fontFamily: "Quicksand_700Bold" }}>Sign In</SubTitle>

          <Formik
            initialValues={{ Email: '', Password: '' }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>
                <UserTextInput
                  label='Email'
                  icon={faEnvelope}
                  placeholder='example@email.com'
                  placeholderTextColor={xandu}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType='email-address'
                />

                <UserTextInput
                  label='Password'
                  icon={faLock}
                  placeholder='**********'
                  placeholderTextColor={xandu}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                  style={{ fontFamily: "Asap_600SemiBold" }}
                />
                <MsgBox>...</MsgBox>
                <StyledButton onPress={handleSubmit}>
                  <ButtonText style={{ fontFamily: "Asap_600SemiBold" }}>
                    Sign In
                  </ButtonText>
                </StyledButton>
                <StyledSocialsLabel>
                  or use one of your social profiles
                </StyledSocialsLabel>
                <StyledSocialsContainer>
                  <StyledButton google={true} onPress={handleSubmit}>
                    <Fontisto name="google" color={cultured} size={25} />
                    <ButtonText google={true} style={{ fontFamily: "Asap_600SemiBold" }}>
                      Google
                    </ButtonText>
                  </StyledButton>
                  <StyledButton facebook={true} onPress={handleSubmit}>
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
    );
  }
}

const UserTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
  return (
    <View>

      <LeftIcon>
        <FontAwesomeIcon icon={icon} size={24} color={raisinBlack} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <FontAwesomeIcon icon={hidePassword ? faEye : faEyeSlash} size={24} color={raisinBlack} />
        </RightIcon>
      )}
    </View>
  )
}

export default Login;
