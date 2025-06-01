import { create } from "zustand";

type Post = {
  id: number;
  title: string;
  body: string;
};

type PostState = {
  posts: Post[];
  loading: boolean;
  error: string | null;
  fetchPosts: () => Promise<void>;
};

export const usePostStore = create<PostState>((set) => ({
  posts: [],
  loading: false,
  error: null,
  fetchPosts: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      const data = await res.json();
      set({ posts: data, loading: false });
    } catch (e) {
      set({ error: String(e), loading: false });
    }
  },
}));
