import { useState, useEffect } from 'react';
import type { Todo } from '../types/todo';

type TodoItemProps = {
    todo: Todo,
    onDelete: (id: number) => void,
    onEdit: (id: number, label: string) => void
}

export function TodoItem({todo, onDelete, onEdit}: TodoItemProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [label, setLabel] = useState(todo.label);

    useEffect(() => {
        setLabel(todo.label);
    },[todo.label]);

    const handleSave = () => {
        const newLabel = label.trim();
        if(!newLabel) {
            return;
        }

        onEdit(todo.id, newLabel);
        setIsEditing(false);
    }

    const handleCancel = () => {
        setIsEditing(false);
        setLabel(todo.label);
    }

    return (
        <li className="todo-item">

        {isEditing ? (
            <div className="todo-edit">
                <input type="text" value={label} onChange={(e) => setLabel(e.target.value)} autoFocus></input>
                <button onClick={handleSave}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
            </div>
        ) : (
            <>
            <span>{todo.label}</span>
            <div className='todo-actions'>
                <button onClick={() => setIsEditing(true)}>Edit</button>
                <button onClick={() => onDelete(todo.id)}>Delete</button>
            </div>
            </>
        )}
        </li>          
    )
}