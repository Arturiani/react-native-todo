import React,{ useState } from "react";
import { View, FlatList } from "react-native";
import { Navbar } from "./src/components/Navbar.jsx";
import { AddTodo } from "./src/components/AddTodo.jsx";
import { Todo } from "./src/components/Todo.jsx";

export default function App() {
  const [todoList, setTodoList] = useState([])

  const addTodo = (title) =>{ 
    setTodoList( preTodoList => [...preTodoList,{
      id: Date.now().toString(),
      title,
    }])
  }

  const removeTodo = id =>{
    setTodoList(preTodoList => preTodoList.filter(todo => todo.id !== id))
  }

  return (
    <View>
      <Navbar title='My TODO!' />
        <AddTodo onSubmit={addTodo} />
        <FlatList 
        keyExtractor={item=>item.id.toString()}
        data={todoList}
        renderItem={({item}) => <Todo todo={item} onRemove={removeTodo}/>}
        />
    </View>
  )
}

