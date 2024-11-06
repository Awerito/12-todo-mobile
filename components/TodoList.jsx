import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

function TodoList({ tasks, toggleTask, removeTask }) {
  return (
    <ScrollView style={styles.container}>
      {tasks.map((task) => (
        <View key={task.id} style={styles.taskItem}>
          <View style={styles.checkboxContainer}>
            <TouchableOpacity onPress={() => toggleTask(task.id)}>
              <Text
                style={[
                  styles.taskText,
                  task.completed && styles.completedText,
                ]}
              >
                {task.title}
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => removeTask(task.id)}
          >
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: "#f0f0f0",
    padding: 10,
  },
  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 8,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  checkbox: {
    marginRight: 10,
  },
  taskText: {
    fontSize: 16,
    color: "#333",
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "#999",
  },
  deleteButton: {
    backgroundColor: "pink",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  taskList: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});

export default TodoList;
