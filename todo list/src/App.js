import Todo from "./Todo";

var todos = [
  { Task: "Gør rent", Done: "nej", Due: "20.10.2020" },
  { Task: "Køb ind", Done: "nej", Due: "30.10.2020" },
  { Task: "Vask tøj", Done: "nej", Due: "1.11.2020" },
];

function App() {
  return (
    <div>
      <h1>To do list</h1>
      <p>En liste over ting jeg skal gøre</p>
      <ul>
        {todos.map((t) => (
          <Todo Task={t.Task} Done={t.Done} Due={t.Due} />
        ))}
      </ul>
    </div>
  );
}

export default App;
