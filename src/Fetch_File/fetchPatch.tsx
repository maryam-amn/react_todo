import { Todo } from '../Todo.ts';

export async function fetchPatch(
  todo: Todo,
  isChecked: boolean,
  title: string,
  dueDate: string,
) {
  await fetch(`https://api.todos.in.jt-lab.ch/todos?id=eq.${todo.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ done: isChecked, title: title, due_date: dueDate }),
  });
}
