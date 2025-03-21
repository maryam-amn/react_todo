import { Todo } from '../Todo.ts';

export async function fetchPost(
  title: string,
  due_date: string,
): Promise<Todo> {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Accept', 'application/vnd.pgrst.object');
  myHeaders.append('Prefer', 'return=representation');
  const myRequest = new Request('https://api.todos.in.jt-lab.ch/todos', {
    method: 'POST',
    body: JSON.stringify({
      title: title,
      due_date: due_date || null,
    }),
    headers: myHeaders,
  });

  const response = await fetch(myRequest);
  if (response.ok) {
    console.log('There is no error');
  }
  return await response.json();
}
