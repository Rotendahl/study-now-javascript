import Todo from "./Todo";
import styled from "styled-components";
import { getTodos, markDone, createTodo } from "./api";
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

var FormContainer = styled.div`
  background-color: #fafaf0;
  margin: 20px;
  border-radius: 10px;
  padding: 10px;
`;

function App() {
  var [todos, setTodos] = useState(getTodos());
  var [task, setTask] = useState("");
  var [due, setDue] = useState();
  todos = todos.sort((t1, t2) => (t2.Done ? -1 : 1));
  return (
    <Container>
      <h1>To do list</h1>
      <TodoListContainer>
        <TodoTop>{todosLeft(todos)} opgaver tilbage</TodoTop>
        <FormContainer>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              var todo = createTodo(task, due);
              setTodos([...todos, todo]);
              return true;
            }}
          >
            <input
              type="text"
              placeholder="Opgave"
              onChange={(event) => setTask(event.target.value)}
            />
            <input
              type="date"
              onChange={(event) => setDue(event.target.value)}
            />
            <button>Opret</button>
          </form>
        </FormContainer>
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
