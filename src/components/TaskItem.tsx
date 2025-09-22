import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TaskItem({ task, onDelete, onToggle }: any) {
  return (
    <View style={styles.task}>
      <TouchableOpacity onPress={() => onToggle(task.id)} style={{ flex: 1 }}>
        <Text style={[styles.text, task.completed && styles.completed]}>
          {task.text}
        </Text>
      </TouchableOpacity>
      <Button title="Delete" onPress={() => onDelete(task.id)} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  task: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    elevation: 2,
  },
  text: { fontSize: 16 },
  completed: { textDecorationLine: "line-through", color: "gray" },
});
