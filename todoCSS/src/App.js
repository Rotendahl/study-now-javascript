import Todo from "./Todo";
import styled from "styled-components";

var todos = [
  { Task: "Gør rent", Done: "nej", Due: "20.10.2020" },
  { Task: "Køb ind", Done: "nej", Due: "30.10.2020" },
  { Task: "Vask tøj", Done: "nej", Due: "1.11.2020" },
];

var Container = styled.div`
  text-align: center;
`;

var TodoListContainer = styled.div`
  width: 400px;
  margin: auto;
  background-color: #dadae0;
  border-radius: 5px;
`;

var TodoTop = styled.h4`
  border: 1px solid black;
  padding: 20px;
`;

function App() {
  return (
    <Container>
      <h1>To do list</h1>
      <TodoListContainer>
        <TodoTop>En liste over ting jeg skal gøre</TodoTop>
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
