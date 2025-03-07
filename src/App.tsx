import './App.css';
import { TodoForm } from './TodoForm.tsx';
import { useEffect, useState } from 'react';
import TodoList from './TodoList.tsx';
import { Todo } from './interface.tsx';
import { fetchPost } from './fetchPost.tsx';

const App = () => {
  const [listTodo, setlistTodo] = useState<Todo[]>([]);

  const addToMyListAndToTheAPI = (content: string, dueDate: string) => {
    const newList: Todo = {
      title: content,
      due_date: dueDate,
      content: content,
      id: content,
      done: false,
    };

    fetchPost(content, dueDate);
    setlistTodo([...listTodo, newList]);
  };
  // Fetch Get
  useEffect(() => {
    fetch('https://api.todos.in.jt-lab.ch/todos')
      .then((response) => response.json())
      .then((data) => {
        setlistTodo(data);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  {
    console.log(listTodo);
  }
  return (
    <>
      <h1 className="content"> My To do list </h1>
      <TodoForm addTodo={addToMyListAndToTheAPI} />
      <TodoList todoList={listTodo} />
    </>
  );
};

export default App;
