import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { PropsWithChildren } from "react";
import { TextInputProps, View } from "react-native";
import { LeftIcon, StyledInputLabel, StyledTextInput, RightIcon, Colors } from "./styles";

export interface UserTextInputProps extends TextInputProps {
  label: string;
  icon: IconProp;
  isPassword?: boolean;
  hidePassword?: boolean;
  setHidePassword?: (_: boolean) => void;
}

export const UserTextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}: PropsWithChildren<UserTextInputProps>) => {
  return (
    <View>
      <LeftIcon>
        <FontAwesomeIcon icon={icon} size={24} color={Colors.raisinBlack} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword && setHidePassword(!hidePassword)}>
          <FontAwesomeIcon
            icon={hidePassword ? faEye : faEyeSlash}
            size={24}
            color={Colors.raisinBlack}
          />
        </RightIcon>
      )}
    </View>
  );
};
