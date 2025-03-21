export async function fetchData(setlistTodo: (todos: []) => void) {
  fetch('https://api.todos.in.jt-lab.ch/todos')
    .then((response) => response.json())
    .then((data) => {
      setlistTodo(data);
    })
    .catch((error) => console.error('Error:', error));
}
