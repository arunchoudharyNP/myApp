import React from "react";
import { Text, View,TouchableOpacity } from "react-native";

const GoalList = (props) => {
    
  
  return (
    <TouchableOpacity
      onPress={()=>props.onDelete(props.itemData.item.id)}
    >
      <View style={{ padding: 8, borderWidth: 1, margin: 4 }}>
        <Text> {props.itemData.item.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoalList;
