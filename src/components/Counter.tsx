import { useCounterStore } from "../store/counter";

export default function Counter() {
  const { count, increment, decrement } = useCounterStore();
  return (
    <div>
      <h2>count: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
