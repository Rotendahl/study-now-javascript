import styled from "styled-components"

var TodoLiContainer = styled.li`
  background-color: #f0f0f0;
  border-radius: 10px;
  width: 300px;
  list-style: none;
`;

function Todo(props){
  return <TodoLiContainer>
    <p>Opgave: {props.Task}</p>
    <p>Status: {props.Done}</p>
    <p>Frist: {props.Due}</p>
    </TodoLiContainer>
}

export default Todo