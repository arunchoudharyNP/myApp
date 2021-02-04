import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, Button } from "react-native";

const GoalInput = (props) => {
  const [goal, setgoal] = useState("");
  const [goalDes, setgoalDes] = useState("");
  const [imageUrl, setimageUrl] = useState("");

  console.log();
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputHeader}> Goal </Text>
      <TextInput
        style={styles.input}
        placeholder=" Enter your Goal"
        onChangeText={(text) => {
          setgoal(text);
        }}
      />
      <Text style={styles.inputHeader}> Goal Description </Text>
      <TextInput
        style={styles.input}
        placeholder=" Enter your Goal Description"
        onChangeText={(text) => {
          setgoalDes(text);
        }}
      />
      <Text style={styles.inputHeader}> Image Url </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Image Url"
        onChangeText={(text) => {
          setimageUrl(text);
        }}
      />
      <Button
        title="Submit"
        onPress={() => {
          props.onSave(goal, goalDes, imageUrl)
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    marginTop: 40,
  },
  inputHeader: {
    fontWeight: "700",
    fontSize: 24,
    color: "black",
    padding: 5,
    marginLeft: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "grey",
    marginHorizontal: 20,
  },
});

export default GoalInput;
