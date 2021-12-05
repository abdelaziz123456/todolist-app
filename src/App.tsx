import { useState } from 'react';

import NewTodo from './Components/NewTodo';
import Todos from './Components/Todos';
import Todo from './Models/todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };


  const removeTodoHandler=(id:string)=>{
      setTodos((prevTodos)=>{
        return prevTodos.filter (todo =>todo.id !== id)
      })
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
