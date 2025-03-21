import './App.css';
import { TodoForm } from './TodoForm.tsx';
import { useEffect } from 'react';
import TodoList from './TodoList.tsx';

import { fetchData } from './Fetch_File/fetchGet.tsx';
import { useTodoStore } from './useTodoStore.ts';

const App = () => {
  const getFetch = useTodoStore((state) => state.getAllMyListFromGet);

  useEffect(() => {
    const getTodoFromTheAPI = async () => {
      await fetchData(getFetch);
    };
    getTodoFromTheAPI().then((r) => console.log(r));
  }, [getFetch]);

  return (
    <>
      <h1 className="content"> My To do list </h1>
      <TodoForm />
      <TodoList />
    </>
  );
};

export default App;
