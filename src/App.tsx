import './App.css';
import { TodoForm } from './TodoForm.tsx';
import { useState } from 'react';
import { TodList } from './TodoList.tsx';

const App = () => {
  const [ListTodo, setListTodo] = useState<string[]>([]);

  const addTodo = (addToList: string) => {
    setListTodo([...ListTodo, addToList]);
  };

  return (
    <>
      <h1 className="content"> My To do list </h1>
      <TodoForm addTodo={addTodo} ListTodo={ListTodo} />

      <TodList todoList={ListTodo} />
    </>
  );
};

export default App;
