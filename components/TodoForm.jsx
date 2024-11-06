import { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

function TodoForm({ addTask }) {
  const [task, setTask] = useState("");

  const validateInput = () => {
    if (task.trim() !== "") {
      addTask(task);
      setTask("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={task}
        onChangeText={(text) => {
          setTask(text);
        }}
        onSubmitEditing={validateInput}
      />
      <TouchableOpacity style={styles.button} onPress={validateInput}>
        <Text style={styles.buttonText}>Add task</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    padding: 20,
  },
  input: {
    flex: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default TodoForm;
