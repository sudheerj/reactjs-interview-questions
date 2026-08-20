import type {Comment as CommentType} from "../types/Comment";
import {Comment as CommentComponent} from "./Comment";

interface CommentListProps {
    comments: CommentType[],
    onReply: (parentId: number, text: string) => void
}

export function CommentList({comments, onReply}: CommentListProps) {
    return (<div>
        {comments.map((comment: CommentType) => (
            <CommentComponent
                key={comment.id}
                comment={comment}
                onReply={onReply}>
            </CommentComponent>
        ))}
    </div>)
}