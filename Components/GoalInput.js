import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, Button } from "react-native";

const GoalInput = (props) => {
  const [goal, setgoal] = useState("");
 
  console.log()
  return (
    
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 80,
        marginHorizontal: 10,
        marginBottom: 25,
      }}
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your goals"
          value={goal}
          onChangeText={(text) => {
            setgoal(text);
          }}
        />
      </View>

      <View style={{ alignItems: "center" }}>
        <Button
          title="Save Goals"
          onPress={() => {
            props.onSave(goal)
            setgoal("");

          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    width: "60%",
    height: 35,
  },
});

export default GoalInput;
