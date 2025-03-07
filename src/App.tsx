import './App.css';
import { TodoForm } from './TodoForm.tsx';
import { useEffect, useState } from 'react';
import TodoList from './TodoList.tsx';
import { Todo } from './interface.tsx';
import { fetchPost } from './fetchPost.tsx';

const App = () => {
  const [ListTodo, setListTodo] = useState<Todo[]>([]);

  const addToMyListAndToTheAPI = (content: string, dueDate: string) => {
    const newList: Todo = { title: content, due_date: dueDate };

    fetchPost(content, dueDate);
    setListTodo([...ListTodo, newList]);
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
      <TodoForm addTodo={addToMyListAndToTheAPI} />
      <TodoList todoList={ListTodo} />
      {console.log(ListTodo)}
    </>
  );
};

export default App;
