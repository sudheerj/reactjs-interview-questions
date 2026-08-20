import { useState } from "react";

interface CommentForm {
    onSubmit: (text: string) => void,
    placeholder?: string
}

export function CommentForm({onSubmit, placeholder="Write a comment"}: CommentForm) {
    const [text, setText] = useState("");
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if(!text.trim()) {
            return;
        }

        onSubmit(text);
        setText("");
    }

    return (
        <form className="comment-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder={placeholder}
                value={text}
                onChange={(e) => setText(e.target.value)} ></input>

            <button type="submit">Submit</button>
        </form>
    );
}