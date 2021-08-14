import styled from 'styled-components';
import { SafeAreaView, View, Text, Image, TextInput, TouchableOpacity } from 'react'

// colors
export const Colors = {
  sunglow: "#ffcb47",
  orangeRed: "#fe621d",
  vividBurgundy: "#a4303f",
  xandu: "#778472",
  raisinBlack: "#221d23",
  cultured: "#eef0f2",
  google: '#DD4B39',
  facebook: '#3B5998'
};

const { sunglow, orangeRed, vividBurgundy, xandu, raisinBlack, cultured, google, facebook } = Colors;

export const StyledContainer = styled.SafeAreaView`
  flex: 1;
  padding: 25px;
  background-color: ${sunglow};
  align-items: center;
`
export const InnerContainer = styled.View`
  flex: 1;
  width: 90%
  align-items: center;
  justify-content: center;
`;

export const PageLogo = styled.Image`
  height: 150px;
  width: 150px;
`;

export const PageTitle = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: ${orangeRed};
  padding: 10px;
`;

export const SubTitle = styled.Text`
  font-size: 30px;
  padding-left: 25px;
  align-self: flex-start;
  margin-bottom: 20px;
  font-weight: bold;
  color: ${raisinBlack};
`;

export const StyledFormArea = styled.View`
  width: 90%;
`;

export const StyledTextInput = styled.TextInput`
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  border-bottom-color: ${xandu};
  border-bottom-width: 2px;
  font-size: 16px;
  height: 60px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${raisinBlack};
`;

export const StyledInputLabel = styled.Text`
  color: ${vividBurgundy};
  font-size: 14px;
  font-weight: bold;
  text-align: left;
`;

export const LeftIcon = styled.View`
  left: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${vividBurgundy}
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-vertical: 10px;
  height: 60px;

  ${(props) => props.google === true && `
    background-color: ${google};
    flex-direction: row;
    align-items: center;
    width: 45%;
  `}

  ${(props) => props.facebook === true && `
  background-color: ${facebook};
  flex-direction: row;
  align-items: center;
  width: 45%;
`}
`;

export const ButtonText = styled.Text`
  color: ${cultured};
  font-size: 20px;

  ${(props) => (props.google === true || props.facebook === true) && `
    padding: 0px 15px;
  `}
`;

export const MsgBox = styled.Text`
  text-align: center;
  font-size: 12px;
`;
export const StyledSocialsLabel = styled.Text`
  color: ${xandu};
  font-size: 14px;
  font-weight: bold;
  padding: 15px;
  text-align: center;
`;

export const StyledSocialsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ExtraView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0px;
  ${(props) => props.signin === true && `
  justify-content: center;
`}
`;

export const TextLink = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextLinkContent = styled.Text`
  align-items: center;
  font-size: 15px;

  color: ${xandu};
  ${(props) => (props.signup === true || props.signin === true) && `
    color: ${vividBurgundy};
    padding: 0px 10px;
  `}
`;
