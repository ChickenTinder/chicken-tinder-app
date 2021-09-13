import AppLoading from "expo-app-loading";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";

// Components
import {
  Colors,
  DinerCard,
  DinerName,
  DinerUserName,
  ExtraView,
  InnerContainer,
  StyledContainerAlt,
  StyledFormArea,
  SubTitle,
  TextLink,
  TextLinkContent,
} from "../components/styles";

// Dummy Data
import DinerData from "./DinerData";

// Fonts
import {
  useFonts,
  Asap_600SemiBold,
  Asap_500Medium,
  Asap_400Regular,
} from "@expo-google-fonts/asap";
import { Quicksand_700Bold } from "@expo-google-fonts/quicksand";

// Formik
import { Formik } from "formik";

// Icons
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { UserTextInput } from "../components/UserTextInput";

const AddDiners = () => {
  const [fontsLoaded] = useFonts({
    Asap_400Regular,
    Asap_500Medium,
    Asap_600SemiBold,
    Quicksand_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <StyledContainerAlt>
        <InnerContainer>
          <SubTitle style={{ fontFamily: "Quicksand_700Bold" }}>Add Diners</SubTitle>
          <ExtraView diner={true}>
            <TextLink>
              <TextLinkContent diner={true} style={{ fontFamily: "Asap_600SemiBold" }}>
                Cancel
              </TextLinkContent>
            </TextLink>
          </ExtraView>
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
            {({ handleChange, handleBlur, values }) => (
              <StyledFormArea>
                <UserTextInput
                  label=""
                  icon={faSearch}
                  placeholder="@username"
                  placeholderTextColor={Colors.xandu}
                  onChangeText={handleChange("fullName")}
                  onBlur={handleBlur("fullName")}
                  value={values.fullName}
                />
              </StyledFormArea>
            )}
          </Formik>
          <ScrollView>
            {DinerData.map((diner) => (
              <DinerCard key={diner.id}>
                <DinerName style={{ fontFamily: "Asap_500Medium" }}>{diner.name}</DinerName>
                <DinerUserName style={{ fontFamily: "Asap_400Regular" }}>
                  @{diner.username}
                </DinerUserName>
              </DinerCard>
            ))}
          </ScrollView>
        </InnerContainer>
        <StatusBar style="auto" />
      </StyledContainerAlt>
    );
  }
};

export default AddDiners;
