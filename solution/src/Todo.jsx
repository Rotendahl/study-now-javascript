import styled from "styled-components"

var TodoLiContainer = styled.div`
  border-radius: 10px;
  width:300px;
  list-style:none;
  margin:5px;
  display: flex;
  justify-content: space-around;
`;

var TodoEntry = styled.div`
  margin: 3px;
`;

function Todo(props){
  return <TodoLiContainer
   onClick={props.onClick}
   style={{
    backgroundColor: props.Done ? "#0bd919" : "#fcf3fd"
  }}>
    <TodoEntry>{props.Due.split('T')[0]}</TodoEntry>
    <TodoEntry>{props.Task}</TodoEntry>
    </TodoLiContainer >
}

export default Todo