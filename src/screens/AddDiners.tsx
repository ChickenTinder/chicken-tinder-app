import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View } from 'react-native'

// Components
import {
  Colors,
  DinerCard,
  DinerName,
  DinerUserName,
  ExtraView,
  InnerContainer,
  LeftIcon,
  StyledContainerAlt,
  StyledFormArea,
  StyledInputLabel,
  StyledTextInput,
  SubTitle,
  TextLink,
  TextLinkContent
} from '../components/styles'

// Colors
const { xandu, raisinBlack } = Colors;

// Dummy Data
import DinerData from './DinerData'

// Fonts
import { useFonts, Asap_600SemiBold, Asap_500Medium, Asap_400Regular } from '@expo-google-fonts/asap';
import { Quicksand_700Bold } from '@expo-google-fonts/quicksand';

// Formik
import { Formik } from 'formik';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const AddDiners = () => {
  let [fontsLoaded] = useFonts({
    Asap_400Regular,
    Asap_500Medium,
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
          <ExtraView diner={true}>
            <TextLink diner={true}>
              <TextLinkContent diner={true} style={{ fontFamily: "Asap_600SemiBold" }}>
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
          <ScrollView>
            {DinerData.map(diner => (
              <DinerCard key={diner.id}>
                <DinerName style={{ fontFamily: "Asap_500Medium" }}>
                  {diner.name}
                </DinerName>
                <DinerUserName style={{ fontFamily: "Asap_400Regular" }}>
                  @{diner.username}
                </DinerUserName>
              </DinerCard>
            ))}
          </ScrollView>
        </InnerContainer>
        <StatusBar style="auto" />
      </StyledContainerAlt >
    );
  }
}

const UserTextInput = ({ label, icon, ...props }) => {
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
