import React, { useState } from "react";

import {
  StyleSheet,
  View,
  FlatList,
  Button,
  Modal,
  TouchableOpacity,
  Text,
} from "react-native";
import GoalInput from "./GoalInput";
import GoalList from "./GoalList";
import { Ionicons } from "@expo/vector-icons";

const FirstScreen = () => {
  let newGoals;
  const [, setgoal] = useState("");
  const [goalList, setgoalList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const saveHandler = (goal) => {
    setgoal(goal);
    setgoalList((prevGoals) => [
      ...prevGoals,
      { id: Math.random().toString(), value: goal },
    ]);
  };

  const deleteHandler = (id) => {
    newGoals = goalList.filter((value) => value.id != id);

    setgoalList(newGoals);
  };

  return (
    <View style={styles.mainContainer}>
      <Modal
        style={{ felx: 1 }}
        animationType="slide"
        transparent={false}
        visible={showModal}
        onRequestClose={() => {
          console.log("Modal closes");
          setShowModal(false);
        }}
      >
        <GoalInput onSave={saveHandler} />
        <TouchableOpacity
          onPress={() => {
            setShowModal(false);
          }}
          style={{ position: "absolute", top: 10, right: 10 }}
        >
          <Ionicons name="close-circle-sharp" size={36} color="black" />
        </TouchableOpacity>
      </Modal>

      <TouchableOpacity
        onPress={() => {
          setShowModal(true);
        }}
        style={styles.goalStyle}
      >
        <Text
          style={{
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          Add Goals
        </Text>
      </TouchableOpacity>

      <FlatList
        data={goalList}
        renderItem={(itemData) => (
          <GoalList onDelete={deleteHandler} itemData={itemData} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  inputContainer: {
    borderWidth: 1,
    width: "60%",
    height: 35,
  },
  goalStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
    marginHorizontal: 50,
    backgroundColor: "green",
    height: 35,
  },
});

export default FirstScreen;
