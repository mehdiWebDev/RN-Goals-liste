import {
  TextInput,
  StyleSheet,
  View,
  Button,
  Modal,
  Image,
} from "react-native";
import React, { useState } from "react";

const GoalInput = ({ addGoalHandler, setModalIsVisible }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <Modal style={styles.modal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.input}
          value={enteredGoal}
          placeholder="Your cours goal!"
        />
        <View style={styles.buttonContainer}>
          <Button
            color="#f31282"
            onPress={() => setModalIsVisible(false)}
            title="Cancel"
          />
          <Button
            onPress={() => {
              addGoalHandler(enteredGoal);
              setEnteredGoal("");
              setModalIsVisible(false);
            }}
            style={styles.button}
            title="Add Goal"
            color={"#a45fff"}
          />
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#311b6b",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  input: {
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderRadius: 6,
    borderWidth: 1,
    padding: 16,
    width: "70%",
    marginBottom: 10,
    color: "#120438",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 20,
  },
});

export default GoalInput;
