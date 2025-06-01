import { useEffect } from "react";
import { usePostStore } from "../store/post";

export default function PostList() {
  const { posts, fetchPosts, loading, error } = usePostStore();

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) return <p>読込中...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>投稿一覧</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
