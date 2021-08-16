import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native'

// Components
import {
  ButtonText,
  Colors,
  ExtraView,
  InnerContainer,
  LeftIcon,
  MsgBox,
  RightIcon,
  StyledButton,
  StyledContainer,
  StyledContainerAlt,
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
const { xandu, raisinBlack, cultured, sunglow } = Colors;

// Fonts
import { useFonts, Asap_600SemiBold } from '@expo-google-fonts/asap';
import { Quicksand_700Bold } from '@expo-google-fonts/quicksand';

// Formik
import { Formik } from 'formik';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEye, faEyeSlash, faUser, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Fontisto } from '@expo/vector-icons'

// Keyboard avoiding view
import KeyboardAvoidingWrapper from './../components/KeyboardAvoidingWrapper';

const AddDiners = () => {
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
      <StyledContainerAlt>
        <InnerContainer>
          <SubTitle style={{ fontFamily: "Quicksand_700Bold" }}>Add Diners</SubTitle>
          <ExtraView signin={true}>
            <TextLink>
              <TextLinkContent signup={true} style={{ fontFamily: "Asap_600SemiBold" }}>
                Cancel
              </TextLinkContent>
            </TextLink>
          </ExtraView>
          <Formik
            initialValues={{ fullName: '', email: '', zipCode: '', password: '', confirmPassword: '' }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>
                <UserTextInput
                  label=''
                  icon={faSearch}
                  placeholder='@username'
                  placeholderTextColor={xandu}
                  onChangeText={handleChange('fullName')}
                  onBlur={handleBlur('fullName')}
                  value={values.fullName}
                />
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
        <StatusBar style="auto" />
      </StyledContainerAlt >
    );
  }
}

const UserTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <FontAwesomeIcon icon={icon} size={24} color={xandu} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
    </View>
  )
}
export default AddDiners;
