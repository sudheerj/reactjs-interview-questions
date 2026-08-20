import type { Comment } from "../types/Comment";

export const initialComments: Comment[] = [
  {
    id: 1,
    author: "John",
    text: "This is a great post!",
    replies: [
      {
        id: 2,
        author: "Sarah",
        text: "I agree!",
        replies: [],
      },
    ],
  },
  {
    id: 3,
    author: "Alex",
    text: "Nice explanation.",
    replies: [],
  },
];