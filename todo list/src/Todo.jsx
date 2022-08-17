function Todo(props){
  return <li>
    <p>Opgave: {props.Task}</p>
    <p>Status: {props.Done}</p>
    <p>Frist: {props.Due}</p>
    </li>
}

export default Todo