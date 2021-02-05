import React, { useState, useEffect } from "react";
import { Text, TextInput, View, StyleSheet, Button } from "react-native";

const GoalInput = (props) => {
  const [goal, setgoal] = useState("");
  const [goalDes, setgoalDes] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [id, setid] = useState("");
  let data = props.data;

  useEffect(() => {
    if (data) {
      setid(data.id)
      setgoal(data.value);
      setgoalDes(data.description);
      setimageUrl(data.url);
    }
  }, [data]);

  console.log(goal, goalDes, imageUrl);

  console.log(" data in goal input  " + data.value);
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputHeader}> Goal </Text>
      <TextInput
        value={goal}
        style={styles.input}
        placeholder=" Enter your Goal"
        onChangeText={(text) => {
          setgoal(text);
        }}
      />
      <Text style={styles.inputHeader}> Goal Description </Text>
      <TextInput
        value={goalDes}
        style={styles.input}
        placeholder=" Enter your Goal Description"
        onChangeText={(text) => {
          setgoalDes(text);
        }}
      />
      <Text style={styles.inputHeader}> Image Url </Text>
      <TextInput
        value={imageUrl}
        style={styles.input}
        placeholder="Enter your Image Url"
        onChangeText={(text) => {
          setimageUrl(text);
        }}
      />
      <Button
        title="Submit"
        onPress={() => {
          props.onSave(id,goal, goalDes, imageUrl);
           setid("");
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
