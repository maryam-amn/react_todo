import './App.css';
import { TodoForm } from './TodoForm.tsx';
import { useEffect } from 'react';
import TodoList from './TodoList.tsx';

import { fetchData } from './Fetch_File/fetchGet.tsx';
import { useTodoStore } from './useTodoStore.ts';

const App = () => {
  const getFetch = useTodoStore((state) => state.getAllMyListFromGet);

  const error = useTodoStore((state) => state.error);
  const errorMessage = useTodoStore((state) => state.errormessage);

  useEffect(() => {
    const getTodoFromTheAPI = async () => {
      await fetchData(getFetch);
    };
    try {
      getTodoFromTheAPI();
      errorMessage(null);
    } catch {
      errorMessage('We cannot get all the to-do, please  check your network');
    }
  }, [getFetch, errorMessage]);

  return (
    <>
      <h1 className="content"> My To do list </h1>
      <TodoForm />
      {error && <h3 className={'error'}>{error}</h3>}
      <TodoList />
    </>
  );
};

export default App;
