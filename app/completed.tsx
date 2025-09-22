import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import TaskItem from "../src/components/TaskItem";
import { loadTasks, saveTasks } from "../src/utils/storage";

export default function CompletedScreen() {
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const stored = await loadTasks();
      if (stored) setTasks(stored);
    })();
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>✅ Completed Tasks</Text>
      <Link href="/" style={styles.link}>
        ← Back to Pending
      </Link>

      <FlatList
        data={tasks.filter((t) => t.completed)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem task={item} onDelete={deleteTask} onToggle={toggleTask} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 40, backgroundColor: "#f8f8f8" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10, textAlign: "center" },
  link: { textAlign: "right", marginBottom: 10, color: "#0a84ff", fontWeight: "600" },
});
