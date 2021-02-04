import React from "react";
import { Text, View,TouchableOpacity,StyleSheet,Image } from "react-native";

const GoalList = (props) => {
    
  
  return (
    <TouchableOpacity
     activeOpacity={0.6}
      onPress={()=>{}}
    >

      <View style={ styles.container}>
    
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
         <Text> {props.itemData.item.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles= StyleSheet.create({

  container:{
    margin:5,
    width:"100%",
    height:200,
    borderRadius:10,
    borderWidth:1
  },
  tinyLogo:{
    margin:2,
    resizeMode:"contain",
   height:"80%",
   width:"100%"

  }
})

export default GoalList;
