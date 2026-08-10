import {useState} from "react";
import type { Todo } from "./types/todo";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

let nextId = 0;
const INITIAL_TODOS: Todo[] = [
  {
    id: nextId++,
    label: 'one'
  },
  {
    id: nextId++,
    label: 'two'
  },
  {
    id: nextId++,
    label: 'three'
  },
];

export default function App() {
  const [todos, setTodos] = useState<Todo[]>(INITIAL_TODOS);

  const addTodo = (label: string) => {
    setTodos((todos) => [...todos, {id: nextId++, label}]);
  }

  const deleteTodo = (id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }

  const editTodo = (id: number, label: string) => {
    setTodos((todos) => todos.map((todo) => 
      todo.id === id ? {...todo, label} : todo
    ));
  }

  return (
    <div className="app">
      <h1>Todo list</h1>
      <TodoForm onAdd={addTodo}></TodoForm>
      <TodoList todos={todos} onDelete={deleteTodo} onEdit={editTodo}></TodoList>
    </div>
  )
}