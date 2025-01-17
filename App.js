import React, { useState } from "react";
import { StyleSheet, View, Platform, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const addGoalHandler = (enteredGoal) => {
    if (enteredGoal.length === 0) {
      return;
    }
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), text: enteredGoal },
    ]);
  };

  const deleteGoalHandler = (goalKey) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== goalKey);
    });
  };

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        {modalIsVisible && (
          <GoalInput
            addGoalHandler={addGoalHandler}
            setModalIsVisible={setModalIsVisible}
          />
        )}
        <FlatList
          style={styles.goalsContainer}
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                itemData={itemData}
                deleteGoalHandler={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item) => item.key}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e085a",
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "android" ? 60 : 60,
  },

  goalsContainer: {
    marginTop: 20,
  },
});
