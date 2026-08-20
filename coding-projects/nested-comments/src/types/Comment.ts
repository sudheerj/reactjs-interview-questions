export interface Comment {
    id: number,
    author: string,
    text: string,
    replies: Comment[]
}