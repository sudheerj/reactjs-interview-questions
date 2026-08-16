import type { Post } from "../types/post";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";
const PAGES = 10;

export async function fetchPosts(
  pageNumber: number,
  signal?: AbortSignal,
): Promise<Post[]> {
  const response = await fetch(
    `${BASE_URL}?_page=${pageNumber}&_limit=${PAGES}`,
    { signal },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json() as Promise<Post[]>;
}
