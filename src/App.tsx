import "./App.css";
import Board from "./components/Board";
import Counter from "./components/Counter";
import UserForm from "./components/UserForm";

function App() {
  return (
    <>
      <div>公式チュートリアル</div>
      <Board />
      <div>GPT生成チュートリアル</div>
      <Counter />
      <UserForm />
    </>
  );
}

export default App;
