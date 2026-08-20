import {useState} from "react";
import type {Comment as CommentType} from "../types/Comment";
import {CommentForm} from "./CommentForm";

interface CommentProps {
    onReply: (parentId: number, text: string) => void,
    comment: CommentType
}
export function Comment({onReply, comment}: CommentProps) {
    const [showReply, setShowReply] = useState(false);

    const handleReply = (text: string) => {
        onReply(comment.id, text);
        setShowReply(false);
    }
    return (
        <div className="comment">
            <strong>{comment.author}</strong>

            <p>{comment.text}</p>
            <button onClick={() => setShowReply(!showReply)}>
                Reply
            </button>

            {showReply && (<CommentForm
                placeholder="Write a reply"
                onSubmit={handleReply}>

            </CommentForm>)}

            <div className="replied">
                {comment.replies.map((reply: CommentType) => (
                    <Comment
                        key={reply.id}
                        comment={reply}
                        onReply={onReply} />
                ))}
            </div>
        </div>
    )
}