import { Todo } from './Todo.ts';
import { fetchDelete } from './Fetch_File/fetchDelete.tsx';
import { useEffect, useState } from 'react';
import { fetchPatch } from './Fetch_File/fetchPatch.tsx';
import { useTodoStore } from './useTodoStore.ts';
import { useShallow } from 'zustand/react/shallow';

const MyTodoListElement = ({ todo }: { todo: Todo }) => {
  const [isChecked, setIsChecked] = useState<boolean>(todo.done);
  const [EditDateValue, setEditDateValue] = useState<string>(todo.due_date);
  const [todoTitle, setTodoTitle] = useState(todo.title);
  const errorMessage = useTodoStore((state) => state.errormessage);

  useEffect(() => {
    setIsChecked(todo.done);
    setEditDateValue(todo.due_date);
    setTodoTitle(todo.title);
  }, [todo]);

  const { removeFromMyList, updateTodo } = useTodoStore(
    useShallow((state) => ({
      removeFromMyList: state.removeFromMyList,
      updateTodo: state.updateTodo,
    })),
  );

  const handleDelete = async () => {
    try {
      await fetchDelete(todo);
      removeFromMyList(todo);
      errorMessage(null);
    } catch {
      errorMessage('we can not delete your todo, check your network ');
    }
  };

  const handleNewDate = async () => {
    if (EditDateValue.length > 0) {
      try {
        const newTodo: Todo = {
          ...todo,
          due_date: todoTitle,
        };
        await fetchPatch(newTodo);
        updateTodo(newTodo);
      } catch {
        setEditDateValue(todo.due_date);
        errorMessage('we can not change the date, check your network');
      }
    }
  };

  const handleIsChecked = async () => {
    try {
      const newTodo: Todo = {
        ...todo,
        done: isChecked,
      };
      await fetchPatch(newTodo);
      updateTodo(newTodo);
      errorMessage(null);
    } catch (error) {
      // The patch fails
      console.log(error);
      setIsChecked(todo.done);
      errorMessage('we can not checked you todo, check you network');
    }
  };

  const handleNewInput = async () => {
    if (todoTitle.length > 0) {
      try {
        const newTodo: Todo = {
          ...todo,
          title: todoTitle,
        };
        await fetchPatch(newTodo);
        updateTodo(newTodo);
        errorMessage(null);
      } catch {
        setTodoTitle(todo.title);
        errorMessage('we can not update you todo, check you network ');
      }
    } else {
      errorMessage('please write a valid todo');
    }
  };

  return (
    <>
      <div className="style">
        <li>
          <div className="item">
            <input
              type="text"
              value={todoTitle}
              onChange={(e) => setTodoTitle(e.target.value)}
              onBlur={handleNewInput}
            />
            <input
              type="date"
              value={EditDateValue || ''}
              onChange={(e) => setEditDateValue(e.target.value)}
              onBlur={handleNewDate}
            />
          </div>
          <div className="button-img-space">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              onSelect={handleIsChecked}
              onBlur={handleIsChecked}
            ></input>
            <button onClick={() => handleDelete()} className="button-img">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/sf-regular/50/FFFFFF/trash.png"
                alt="trash"
              />
            </button>
          </div>
        </li>
      </div>
    </>
  );
};

export default MyTodoListElement;
