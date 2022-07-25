import React, { useState } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { AddTodo, Navbar, Todo } from './src/components';

export default function App() {
   const [todos, setTodos] = useState([]);

   const addTodo = (title) => {
      setTodos(prev => [...prev, {
         id: Date.now().toString(),
         title
      }])
   }
   const removeTodo = (id) => { 
      setTodos(prev => prev.filter(todo => todo.id !== id))
   }


   return (
      <View style={styles.app}>
         <Navbar title='Bandit' />
         <View style={styles.container}>
            <AddTodo onSubmit={addTodo} />
            <FlatList
               data={todos}
               renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo}/>}
               keyExtractor={item => item.id.toString()}
            />
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   app: {

   },
   container: {
      paddingHorizontal: 10,
      paddingVertical: 20,
   },
});
