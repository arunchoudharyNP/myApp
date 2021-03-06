import React, { useState } from "react";

import {
  StyleSheet,
  View,
  FlatList,
  Button,
  Modal,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import GoalInput from "./GoalInput";
import GoalList from "./GoalList";
import { Ionicons } from "@expo/vector-icons";
import ButtonCom from "./helpingComponents/ButtonCom";
import { LinearGradient } from "expo-linear-gradient";

const FirstScreen = () => {
  let newGoals;

  const [goal, setgoal] = useState("");
  const [goalList, setgoalList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editdata, setEditdata] = useState({});

  const saveHandler = (id, goal, goalDes, imageUrl) => {
    let changeArray;

    setgoal(goal);

    if (id) {
      changeArray = goalList.filter((x) => x.id != id);
      // console.log("  array of edit data  "+changeArray[0].id);

      setgoalList([
        ...changeArray,
        { id: id, value: goal, description: goalDes, url: imageUrl },
      ]);
      setEditdata({});
    } else {
      setgoalList((prevGoals) => [
        ...prevGoals,
        {
          id: Math.random().toString(),
          value: goal,
          description: goalDes,
          url: imageUrl,
        },
      ]);
    }

    setShowModal(false);
  };

  const deleteHandler = (id) => {
    newGoals = goalList.filter((value) => value.id != id);

    setgoalList(newGoals);
  };

  const editHandler = (data) => {
    console.log(data);
    setEditdata(data);
    console.log("edit data  " + editdata.value);
    setShowModal(true);
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
          <GoalInput data={editdata} onSave={saveHandler} />
          <TouchableOpacity
            onPress={() => {
              setShowModal(false);
              setEditdata({});
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

        <ButtonCom
          gradient
          startcolor=""
          endColor
          location
          icon="save-sharp"
          round
          center
          margin={20}
          color="#ff0000"
          padding={10}
          style={{ paddingHorizontal: 20 }}
        >
          <Text style={{ color: "white" }}>Submit</Text>
        </ButtonCom>

        <FlatList
          data={goalList}
          renderItem={(itemData) => (
            <GoalList
              editData={editHandler}
              onDelete={deleteHandler}
              itemData={itemData}
            />
          )}
          keyExtractor={(item) => item.id}
        />
         <LinearGradient
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        colors={["#003399", "#66ccff"]}
        style={{ height: "20%" }}
      >
      </LinearGradient>
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
