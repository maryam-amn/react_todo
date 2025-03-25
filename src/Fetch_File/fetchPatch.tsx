import { Todo } from '../Todo.ts';

export async function fetchPatch(todo: Todo) {
  await fetch(`https://api.todos.in.jt-lab.ch/todos?id=eq.${todo.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      done: todo.done,
      title: todo.title,
      due_date: todo.due_date,
    }),
  });
}
