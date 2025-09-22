import React, { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

export default function TaskEditor({ task, onSave, onClose }: any) {
  const [value, setValue] = useState(task.text);

  return (
    <Modal transparent animationType="slide" visible={true}>
      <View style={styles.overlay}>
        <View style={styles.card}>
          <TextInput
            value={value}
            onChangeText={setValue}
            style={styles.input}
            placeholder="Edit task..."
          />
          <View style={styles.row}>
            <Button title="Cancel" onPress={onClose} />
            <Button title="Save" onPress={() => onSave(task.id, value)} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000088",
  },
  card: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
  },
  row: { flexDirection: "row", justifyContent: "space-between" },
});
