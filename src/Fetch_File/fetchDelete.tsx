import { Todo } from '../Todo.ts';

export async function fetchDelete(identification: Todo): Promise<void> {
  const response = await fetch(
    `https://api.todos.in.jt-lab.ch/todos?id=eq.${identification.id}`,
    {
      method: 'DELETE',
    },
  );
  if (!response.ok) {
    throw new Error('the response was not ok!');
  }
}
