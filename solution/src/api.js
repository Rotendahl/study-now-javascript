export async function getTodos(id) {
  var response = await fetch("https://study-now-tody.herokuapp.com/?id=" + id);
  var res = await response.json();
  console.log(res);
  return res;
}

export async function markDone(todo, userId) {
  fetch(
    `https://study-now-tody.herokuapp.com/done?id=${userId}&todoId=${todo.Id}`
  );
  todo.Completed = true;
  return todo;
}

export async function createTodo(task, due, id) {
  await fetch("https://study-now-tody.herokuapp.com?id=" + id, {
    method: "post",
    body: JSON.stringify({ Task: task, Due: due }),
  });
  return {
    Task: task,
    Due: due,
    Done: false,
  };
}
