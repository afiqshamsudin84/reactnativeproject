import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FIREBASE_AUTH } from '../FirebaseConfig';

const EditTodoScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const [text, setText] = useState('');
  const auth = FIREBASE_AUTH;

  useEffect(() => {
    const fetchTodo = async () => {
      const user = auth.currentUser;
      if (!user) return;

      const storedTodos = await AsyncStorage.getItem(`todos_${user.uid}`);
      const todos = storedTodos ? JSON.parse(storedTodos) : [];
      const todo = todos.find(t => t.id === id);
      if (todo) setText(todo.text);
    };
    fetchTodo();
  }, [id, auth]);

  const editTodo = async () => {
    if (text.trim().length === 0) return;

    const user = auth.currentUser;
    if (!user) return;

    const storedTodos = await AsyncStorage.getItem(`todos_${user.uid}`);
    const todos = storedTodos ? JSON.parse(storedTodos) : [];
    const newTodos = todos.map(todo => (todo.id === id ? { ...todo, text } : todo));
    await AsyncStorage.setItem(`todos_${user.uid}`, JSON.stringify(newTodos));

    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit To-Do</Text>
      <TextInput
        style={styles.input}
        placeholder="Edit To-Do"
        value={text}
        onChangeText={setText}
      />
      <TouchableOpacity style={styles.button} onPress={editTodo}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#007BFF',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default EditTodoScreen;
