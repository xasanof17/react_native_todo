import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";

const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue("");
    } else {
      Alert.alert("Please enter anything to input! 😅");
    }
  };

  return (
    <View style={styles.addTodoWrapper}>
      <TextInput
        style={styles.input}
        placeholder="Enter your task"
        onChangeText={setValue}
        value={value}
        autoCorrect={false}
        autoCapitalize="sentences"
      />
      <Button
        style={styles.addTodoBtn}
        title="Добавить"
        onPress={pressHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  addTodoWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 5,
  },
  input: {
    color: "black",
    fontSize: 20,
    backgroundColor: "#eee",
    padding: 10,
    width: "70%",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#ddd",
  },
  addTodoBtn: {
    color: "red",
    fontSize: 20,
    padding: 10,
  },
});

export default AddTodo;
