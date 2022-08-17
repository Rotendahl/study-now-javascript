import Todo from "./Todo";
import styled from "styled-components";
import { getTodos, markDone } from "./api";
import { useState } from "react";

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
  var [todos, setTodos] = useState(getTodos());
  todos = todos.sort((t1, t2) => (t2.Done ? -1 : 1));
  return (
    <Container>
      <h1>To do list</h1>
      <TodoListContainer>
        <TodoTop>{todosLeft(todos)} opgaver tilbage</TodoTop>
        <ul>
          {todos.map((t, i) => (
            <Todo
              Task={t.Task}
              Done={t.Done}
              Due={t.Due}
              onClick={() => setTodos(markDone(todos, i))}
            />
          ))}
        </ul>
      </TodoListContainer>
    </Container>
  );
}

export default App;
