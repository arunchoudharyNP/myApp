import React from "react";

import { View, StyleSheet, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const ButtonCom = (props) => {
  const {
    color,
    margin,
    children,
    style,
    padding,
    center,
    round,
    icon,
    gradient,
    ...restProps
  } = props;

  const buttonStyle = [
    styles.button,
    color && { backgroundColor: color },
    margin && { margin: margin },
    padding && { padding: padding },
    round && { borderRadius: 1000 },
    icon && { flexDirection: "row" },
    style,
  ];

  const centerStyle = [center && { alignSelf: "center" }];

  return (
    <View style={[centerStyle]}>
      <TouchableOpacity style={buttonStyle} {...restProps}>
        {children}
        {icon && (
          <Ionicons
            style={{ marginLeft: 10 }}
            name={icon}
            size={24}
            color="white"
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    margin: 5,
  },
});

export default ButtonCom;
