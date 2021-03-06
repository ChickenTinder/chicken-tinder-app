import React, { PropsWithChildren } from "react";

// Keyboard avoiding view
import { Keyboard, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback } from "react-native";

import { Colors } from "./styles";

const { sunglow } = Colors;

const KeyboardAvoidingWrapper = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        flexDirection: "row",
        backgroundColor: sunglow,
        alignItems: "center",
      }}
    >
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>{children}</TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingWrapper;
