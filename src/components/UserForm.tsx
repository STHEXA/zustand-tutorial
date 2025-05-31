import { useUserStore } from "../store/user";

export default function UserForm() {
  const { username, setUsername } = useUserStore();
  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="ユーザー名を入力"
      />
      <p>こんにちは。{username || "ゲスト"}さん！</p>
    </div>
  );
}
