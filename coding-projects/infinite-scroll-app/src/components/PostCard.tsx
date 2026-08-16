import type {Post} from '../types/post';

interface PostCardProps {
    post: Post
}

export function PostCard({post}: PostCardProps) {
    return (
        <article className="post-card">
            <h2>#{post.id} {post.title}</h2>
            <p>{post.body}</p>
        </article>
    )
}