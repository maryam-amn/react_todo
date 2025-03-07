import './App.css';
import { TodoForm } from './TodoForm.tsx';
import { useEffect, useState } from 'react';
import TodoList from './TodoList.tsx';
import { Todo } from './interface.tsx';

const App = () => {
  const [ListTodo, setListTodo] = useState<Todo[]>([]);

  const addTodo = (content: string, dueDate: string) => {
    const newList: Todo = { title: content, due_date: dueDate };
    setListTodo([...ListTodo, newList]);
    // Fetch Post
    const myRequest = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: content, due_date: dueDate }),
    };
    fetch('https://api.todos.in.jt-lab.ch/todos', myRequest)
      .then((response) => response.json())
      .then((data) => setListTodo(data));
  };
  // Fetch Get
  useEffect(() => {
    fetch('https://api.todos.in.jt-lab.ch/todos')
      .then((response) => response.json())
      .then((data) => {
        setListTodo(data);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <>
      <h1 className="content"> My To do list </h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todoList={ListTodo} />
      {console.log(ListTodo)}
    </>
  );
};

export default App;
