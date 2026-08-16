import { useState, useCallback, useEffect, useRef } from "react";
import type { Post } from "../types/post";
import { fetchPosts } from "../api/postsApi";
import { PostCard } from "./PostCard";

const INITIAL_PAGE = 1;

export function InfintePosts() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [page, setPage] = useState(INITIAL_PAGE);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [hasMore, setHasMore] = useState(true);

    const observerRef = useRef<IntersectionObserver |null>(null);

    const loadPosts = useCallback(async (pageNumber: number) => {
        setLoading(true);
        setError(null);

        try {
            const data = await fetchPosts(pageNumber);

            setPosts((previousPosts) => {
                const existingsIds = new Set(previousPosts.map((post) => post.id));

                const newPosts = data.filter((post) => !existingsIds.has(post.id));

                return [...previousPosts, ...newPosts];
            });

            if(data.length === 0) {
                setHasMore(false);
            }
        } catch(error) {
            if(error instanceof Error) {
                setError(error.message);
            } else {
                setError("Something went wrong");
            }
        } finally {
            setLoading(false);
        }

    }, []);

    useEffect(() => {
        loadPosts(page);
    },[page, loadPosts]);

    const lastElementRef = useCallback((node: HTMLDivElement | null) => {
        if(loading || !hasMore) {
            return;
        }

        if(observerRef.current) {
            observerRef.current.disconnect();
        }

        observerRef.current = new IntersectionObserver((entries) => {
            const firstEntry = entries[0];
            if(firstEntry.isIntersecting && !loading) {
                setPage((previousPage) => previousPage +1);
            }
        }, {
            rootMargin: "200px"
        });

        if(node) {
            observerRef.current.observe(node);
        }
    },[loading, hasMore]);

    return (
        <main className="container">
            <h1>Infinite Posts</h1>
            <section>
            {posts.map((post) =>
                <PostCard
                    key={post.id}
                    post={post}>
                </PostCard>
            )}
            </section>

            {error && (<div className="error">
                <h2>{error}</h2>
                <button onClick={() => loadPosts(page)}>
                    Retry
                </button>
                </div>)
            }

            {hasMore && !error && (<div className="loader" ref={lastElementRef}>
                {loading ? "Loading" : "Scroll for more"}
            </div>)}

            {!hasMore && (<div className="end-message">
                No more posts
            </div>)}
        </main>
    )
}