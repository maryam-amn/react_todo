import './App.css';
import { TodoForm } from './TodoForm.tsx';
import { useEffect, useState } from 'react';
import TodoList from './TodoList.tsx';
import { Todo } from './Todo.ts';
import { fetchPost } from './Fetch_File/fetchPost.tsx';
import { fetchData } from './Fetch_File/fetchGet.tsx';

const App = () => {
  const [listTodo, setlistTodo] = useState<Todo[]>([]);
  const [sorting, setSorting] = useState<string>('name');
  let sortedTodos: Todo[];

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

  useEffect(() => {
    const getTodoFromTheAPI = async () => {
      await fetchData(setlistTodo);
    };
    getTodoFromTheAPI().then((r) => console.log(r));
  }, []);
  console.log(listTodo);

  const changeSorting = (sortType: string) => {
    setSorting(sortType);
  };
  // Sort the list
  if (sorting === 'due-date') {
    sortedTodos = [...listTodo].sort((a, b) => {
      return new Date(b.due_date).getTime() - new Date(a.due_date).getTime();
    });
  } else if (sorting === 'name') {
    sortedTodos = [...listTodo].sort((a, b) => a.title.localeCompare(b.title));
  } else if (sorting === 'done') {
    sortedTodos = [...listTodo].sort((a, b) => (b.done > a.done ? 1 : -1));
    sortedTodos = sortedTodos.filter((todo) => todo.done);
  } else if (sorting === 'undone') {
    sortedTodos = [...listTodo].sort((a, b) => (a.done > b.done ? 1 : -1));
    sortedTodos = sortedTodos.filter((todo) => !todo.done);
  } else {
    sortedTodos = [...listTodo];
  }
  return (
    <>
      <h1 className="content"> My To do list </h1>
      <TodoForm addTodo={addToMyListAndToTheAPI} sorting={changeSorting} />
      <TodoList todoList={sortedTodos} deleteTodo={deleteFromMyList} />
    </>
  );
};

export default App;
