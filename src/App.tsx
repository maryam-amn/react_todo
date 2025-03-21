import './App.css';
import { TodoForm } from './TodoForm.tsx';
import { useEffect } from 'react';
import TodoList from './TodoList.tsx';
import { Todo } from './Todo.ts';
import { fetchPost } from './Fetch_File/fetchPost.tsx';
import ErrorComponent from './ErrorComponent.tsx';
import { useTodoStore } from './useTodoStore.ts';
import { fetchData } from './Fetch_File/fetchGet.tsx';

const App = () => {
  let sortedTodos: Todo[];

  const {
    list,
    addToMyList,
    getAllMyListFromGet,
    removeFromMyList,
    ChangeSort,
    sort,
    addErrormessage,
    AddMessage,
  } = useTodoStore();

  const addToMyListAndToTheAPI = async (content: string, dueDate: string) => {
    try {
      const newList: Todo = {
        title: content,
        due_date: dueDate,
        content: content,
        id: content,
        done: false,
      };

      await fetchPost(content, dueDate);
      addToMyList(newList);
      AddMessage(false);
    } catch {
      AddMessage(true);
    }
  };
  const deleteFromMyList = (todo: Todo) => {
    removeFromMyList(todo);
  };

  useEffect(() => {
    const getTodoFromTheAPI = async () => {
      await fetchData(getAllMyListFromGet);
    };
    getTodoFromTheAPI().then((r) => console.log(r));
  }, [getAllMyListFromGet]);

  const changeSorting = (sortType: string) => {
    ChangeSort(sortType);
  };
  if (sort === 'due-date') {
    sortedTodos = [...list].sort((a, b) => {
      return new Date(b.due_date).getTime() - new Date(a.due_date).getTime();
    });
  } else if (sort === 'name') {
    sortedTodos = [...list].sort((a, b) => a.title.localeCompare(b.title));
  } else if (sort === 'done') {
    sortedTodos = [...list].sort((a, b) => (b.done > a.done ? 1 : -1));
    sortedTodos = sortedTodos.filter((todo) => todo.done);
  } else if (sort === 'undone') {
    sortedTodos = [...list].sort((a, b) => (a.done > b.done ? 1 : -1));
    sortedTodos = sortedTodos.filter((todo) => !todo.done);
  } else {
    sortedTodos = [...list];
  }
  return (
    <>
      <h1 className="content"> My To do list </h1>

      <TodoForm addTodo={addToMyListAndToTheAPI} sorting={changeSorting} />
      {addErrormessage && (
        <ErrorComponent
          message={'We cannot add your to-do, please  check your network '}
        />
      )}
      <TodoList todoList={sortedTodos} deleteTodo={deleteFromMyList} />
    </>
  );
};

export default App;
