// app/index.tsx
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import TaskEditor from "../src/components/TaskEditor";
import TaskItem from "../src/components/TaskItem";
import { loadTasks, saveTasks } from "../src/utils/storage";

export default function HomeScreen() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [text, setText] = useState("");
  const [editingTask, setEditingTask] = useState<any>(null);

  // Load tasks on start
  useEffect(() => {
    (async () => {
      const stored = await loadTasks();
      if (stored) setTasks(stored);
    })();
  }, []);

  // Save tasks on change
  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = () => {
    if (!text.trim()) return;
    const newTask = { id: Date.now().toString(), text, completed: false };
    setTasks([newTask, ...tasks]);
    setText("");
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const saveEdit = (id: string, newText: string) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, text: newText } : t)));
    setEditingTask(null);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Text style={styles.title}>📝 My To-Do List</Text>
      <Link href="/completed" style={styles.link}>
        View Completed →
      </Link>

      {/* Input Row */}
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Enter a task..."
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity style={styles.addBtn} onPress={addTask}>
          <Text style={styles.addBtnText}>＋</Text>
        </TouchableOpacity>
      </View>

      {/* Pending Tasks */}
      <Text style={styles.sectionTitle}>Pending Tasks</Text>
      <FlatList
        data={tasks.filter((t) => !t.completed)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onDelete={deleteTask}
            onToggle={toggleTask}
            onEdit={setEditingTask}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No pending tasks!</Text>
        }
        style={styles.taskList}
      />

      {/* Completed Tasks */}
      <Text style={styles.sectionTitle}>Completed Tasks</Text>
      <FlatList
        data={tasks.filter((t) => t.completed)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onDelete={deleteTask}
            onToggle={toggleTask}
            onEdit={setEditingTask}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No completed tasks yet!</Text>
        }
        style={styles.taskList}
      />

      {/* Edit Modal */}
      {editingTask && (
        <TaskEditor
          task={editingTask}
          onSave={saveEdit}
          onClose={() => setEditingTask(null)}
        />
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
    backgroundColor: "#f0f4f8",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 5,
    textAlign: "center",
    color: "#111827",
  },
  link: {
    textAlign: "right",
    marginBottom: 10,
    color: "#2563eb",
    fontWeight: "600",
  },
  inputRow: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#d1d5db",
    padding: 12,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  addBtn: {
    backgroundColor: "#2563eb",
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  addBtnText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 22,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginVertical: 12,
    color: "#111827",
  },
  taskList: {
    marginBottom: 20,
  },
  emptyText: {
    textAlign: "center",
    color: "#6b7280",
    marginTop: 10,
    fontSize: 16,
  },
});
