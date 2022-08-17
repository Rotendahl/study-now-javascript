import Todo from "./Todo";
import styled from "styled-components";
import { getTodos, markDone, createTodo } from "./api";
import { useEffect, useState } from "react";

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

var id = "c2b474b4-8ad4-48cb-92f0-44e154335980";

var FormContainer = styled.div`
  background-color: #fafaf0;
  margin: 20px;
  border-radius: 10px;
  padding: 10px;
`;
var shouldFetch = false;
function App() {
  var [todos, setTodos] = useState([]);
  useEffect(() => {
    getTodos(id).then((t) => setTodos(t));
    console.log(todos);
  }, shouldFetch);

  var [task, setTask] = useState("");
  var [due, setDue] = useState();
  todos = todos.sort((t1, t2) => (t2.Completed ? -1 : 1));
  return (
    <Container>
      <h1>To do list</h1>
      <TodoListContainer>
        <TodoTop>{todosLeft(todos)} opgaver tilbage</TodoTop>
        <FormContainer>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              var todo = createTodo(task, due, id);
              shouldFetch += 1;
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
              Done={t.Completed}
              Due={t.Due}
              onClick={() => {
                setTodos([...todos, markDone(t, id)]);
                shouldFetch += 1;
              }}
            />
          ))}
        </ul>
      </TodoListContainer>
    </Container>
  );
}

export default App;
