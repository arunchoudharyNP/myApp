import React from "react";
import { Text, View,TextInput,StyleSheet } from "react-native";

const InputCom = (props) => {
   
    const { borderBottom ,title ,titleStyle,...restProps} = props

  const inputStyle =[
      styles.input,
      borderBottom && {borderBottomWidth:1, borderColor:"grey"}
  ]

  return (
    <View>
        {title && <Text style={titleStyle} > {title}   </Text>}
      <TextInput style={inputStyle}  {...restProps}>


      </TextInput>
    </View>
  );
};

const styles=StyleSheet.create({
    input:{
        marginLeft:20

    }

})

export default InputCom;
