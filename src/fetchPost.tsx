export async function fetchPost(title: string, due_date: string) {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Prefer', 'return=representation');
  const myRequest = new Request('https://api.todos.in.jt-lab.ch/todos', {
    method: 'POST',
    body: JSON.stringify({
      title: title,
      due_date: due_date,
    }),
    headers: myHeaders,
  });

  const response = await fetch(myRequest);
  if (response.ok) {
    console.log('There is no error');
  }
}
