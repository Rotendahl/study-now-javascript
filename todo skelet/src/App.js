import Todo from "./Todo";

function App() {
  return (
    <div>
      <h1>To do list</h1>
      <p>En liste over ting jeg skal gøre</p>
      <ul>
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </ul>
    </div>
  );
}

export default App;
