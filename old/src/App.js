import Todo from "./Todo";
import styled from "styled-components";

var todos = [
  { Task: "Gør rent", Done: false, Due: "20.10.2020" },
  { Task: "Køb ind", Done: true, Due: "30.10.2020" },
  { Task: "Vask tøj", Done: false, Due: "1.11.2020" },
];

var Container = styled.div`
  text-align: center;
`;

var TodoListContainer = styled.div`
  width: 400px;
  margin: auto;
  background-color: #dadae0;
  border-radius: 5px;
  margin-bottom: 10px;
  padding-bottom: 10px;
`;

var TodoTop = styled.h4`
  border: 1px solid black;
  padding: 20px;
`;

function todosLeft(todos) {
  var count = 0;
  for (var i = 0; i < todos.length; i++) {
    if (todos[i].Done == false) {
      count = count + 1;
    }
  }
  return count;
}

function App() {
  return (
    <Container>
      <h1>To do list</h1>
      <TodoListContainer>
        <TodoTop>{todosLeft(todos)} opgaver tilbage</TodoTop>
        <ul>
          {todos.map((t) => (
            <Todo Task={t.Task} Done={t.Done} Due={t.Due} />
          ))}
        </ul>
      </TodoListContainer>
    </Container>
  );
}

export default App;
