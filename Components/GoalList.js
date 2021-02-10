import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image, TouchableWithoutFeedback } from "react-native";

import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const GoalList = (props) => {
  return (
    
      <View style={styles.container}>

        <View style={{ padding:4 ,flexDirection:"row" ,flex:1 }}>
          <Text  style={{fontSize:16, fontWeight:"700"}}>
            {props.itemData.item.value}
          </Text>

          <TouchableOpacity  activeOpacity={0.6} style={{position:"absolute" , right:40, top:5}}  onPress={()=>{props.editData(props.itemData.item)}}>
          <MaterialCommunityIcons name="file-edit"  size={24} color="blue" />
          </TouchableOpacity>
   
          <TouchableOpacity  activeOpacity={0.6} style={{position:"absolute" , right:10, top:5}}  onPress={()=>{props.onDelete(props.itemData.item.id)}}>
          <MaterialCommunityIcons name="delete"  size={24} color="red" />
          </TouchableOpacity>
         
        </View>
        <TouchableOpacity   onPress={()=>{}}>
        
        <View  style={styles.image}  >
          <Image
            style={styles.tinyLogo}
            source={{
              uri: props.itemData.item.url ? props.itemData.item.url : "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
        </View>

        </TouchableOpacity>
       
         <View style={{padding:4}}>
         <Text> {props.itemData.item.description}</Text>
         </View>
        
      </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    height: 250,
    borderRadius: 10,
    borderWidth: 1,
   
  },
  tinyLogo: {
    margin: 2,
    resizeMode:"cover",
    height: "100%",
    width: "100%",
    
  },
  image:{
   width:"100%",
   height:180,  

  }
});

export default GoalList;
