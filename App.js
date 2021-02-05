import { StatusBar } from "expo-status-bar";
import React,{useState,useEffect} from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import FirstScreen from "./Components/FirstScreen";



export default function App() {

 const title =" First Screen";
  return (
    <View style={styling.container}>
      
       <FirstScreen getTitle={title}   />

      <StatusBar style="transparent" />
    </View>
  );
}

const styling = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    
  },
});
