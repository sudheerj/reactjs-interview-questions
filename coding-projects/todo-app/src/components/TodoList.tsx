import type { Todo } from "../types/todo"
import { TodoItem } from "./TodoItem"

type TodoListProps = {
    todos: Todo[],
    onDelete: (id: number) => void,
    onEdit: (id: number, label: string) => void
}

export function TodoList({todos, onDelete, onEdit}: TodoListProps) {
    if(todos.length === 0) {
        return <p className="empty-message">No todos found</p>
    }

    return (
        <ul className="todo-list">
            {todos.map((todo) => 
                <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onEdit={onEdit}></TodoItem>
            )}
        </ul>
    )
}