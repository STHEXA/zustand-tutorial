import { useUserStore } from "../store/user";

export default function UserNameDisplay() {
  //状態の一部のみを取得することも可能
  const username = useUserStore((state) => state.username);
  return <div>表示専用: {username}</div>;
}
