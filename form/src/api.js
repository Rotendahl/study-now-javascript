export function getTodos() {
  return [
    { Task: "Gør rent", Done: false, Due: "20.10.2020" },
    { Task: "Køb ind", Done: true, Due: "30.10.2020" },
    { Task: "Vask tøj", Done: false, Due: "1.11.2020" },
  ];
}

export function markDone(todos, i) {
  todos[i].Done = !todos[i].Done;
  return [...todos];
}

export function createTodo(task, due) {
  return {
    Task: task,
    Due: due,
    Done: false,
  };
}
