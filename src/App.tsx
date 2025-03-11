import './App.css';
import { TodoForm } from './TodoForm.tsx';
import { useEffect, useState } from 'react';
import TodoList from './TodoList.tsx';
import { Todo } from './Todo.ts';
import { fetchPost } from './Fetch_File/fetchPost.tsx';
import { fetchData } from './Fetch_File/fetchGet.tsx';

const App = () => {
  const [listTodo, setlistTodo] = useState<Todo[]>([]);

  const addToMyListAndToTheAPI = async (content: string, dueDate: string) => {
    const newList: Todo = {
      title: content,
      due_date: dueDate,
      content: content,
      id: content,
      done: false,
    };

    await fetchPost(content, dueDate);
    setlistTodo([...listTodo, newList]);
  };
  const deleteFromMyList = (todo: Todo) => {
    setlistTodo((todos) => todos.filter((t) => t.id !== todo.id));
  };

  // Fetch Get

  useEffect(() => {
    const getTodoFromTheAPI = async () => {
      await fetchData(setlistTodo);
    };
    getTodoFromTheAPI().then((r) => console.log(r));
  }, []);

  {
    console.log(listTodo);
  }

  return (
    <>
      <h1 className="content"> My To do list </h1>
      <TodoForm addTodo={addToMyListAndToTheAPI} />
      <TodoList todoList={listTodo} deleteTodo={deleteFromMyList} />
    </>
  );
};

export default App;
