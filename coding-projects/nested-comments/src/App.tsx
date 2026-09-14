import { useState } from "react";
import { CommentForm } from "./components/CommentForm";
import { CommentList } from "./components/CommentList";
import { initialComments } from "./data/Comments";
import type { Comment } from "./types/Comment";
import "./App.css";

// Monotonic id source: Date.now() collides for items created in the same ms.
let idCounter = Date.now();
const nextId = () => ++idCounter;

export default function App() {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const addReply = (
    comments: Comment[],
    parentId: number,
    reply: Comment,
  ): Comment[] => {
    return comments.map((comment: Comment) => {
      //Found the parent
      if (comment.id === parentId) {
        return { ...comment, replies: [...comment.replies, reply] };
      }

      //Search inside replies
      return {
        ...comment,
        replies: addReply(comment.replies, parentId, reply),
      };
    });
  };
  const handleReply = (parentId: number, text: string) => {
    const newReply: Comment = {
      id: nextId(),
      author: "You",
      text,
      replies: [],
    };

    setComments((previous) => addReply(previous, parentId, newReply));
  };
  const handleNewComment = (text: string) => {
    const newComment: Comment = {
      id: nextId(),
      author: "You",
      text,
      replies: [],
    };

    setComments((previous) => [...previous, newComment]);
  };
  return (
    <div className="app">
      <h2>Nested comments</h2>

      <CommentForm
        placeholder="Write a comment"
        onSubmit={handleNewComment}
      ></CommentForm>

      {comments && (
        <CommentList comments={comments} onReply={handleReply}></CommentList>
      )}
    </div>
  );
}
