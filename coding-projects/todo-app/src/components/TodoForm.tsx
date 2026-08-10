import {useState} from "react";

type TodoFormProps = {
    onAdd: (label: string) => void
}
export function TodoForm({onAdd}: TodoFormProps) {
    const [newTodo, setNewTodo] = useState("");

    const handleSubmit = () => {
        const label = newTodo.trim();
        if(!label) {
            return;
        }

        onAdd(label);
        setNewTodo("");
    }

    return (
        <div className="todo-form">
            <input type="text" placeholder="Add your todo" value={newTodo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}></input>
            <button type="submit" onClick={handleSubmit} onKeyDown={(e) => {if(e.key === 'Enter') {handleSubmit()}}}>
                Submit
            </button>
        </div>
    )
}