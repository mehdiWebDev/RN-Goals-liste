import React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";

const GoalItem = ({ itemData, deleteGoalHandler }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={() => {
          deleteGoalHandler(itemData.item.key);
        }}
        android_ripple={{ color: "#8429fab6" }}
        style={({ pressed }) => pressed && { backgroundColor: "#8429fab6" }}
      >
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    padding: 6,
    color: "white",
  },
});

export default GoalItem;
