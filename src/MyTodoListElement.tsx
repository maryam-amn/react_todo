import { Todo } from './Todo.ts';
import { fetchDelete } from './Fetch_File/fetchDelete.tsx';
import React, { useEffect, useState } from 'react';
import { fetchPatch } from './Fetch_File/fetchPatch.tsx';

const MyTodoListElement = ({
  myTodoText,
  date,
  todo,
  deleteTodo,
  setErrorDeleteMessage,
  setErrorMessageUpdate,
}: {
  myTodoText: string;
  date: string;
  todo: Todo;
  deleteTodo: (todo: Todo) => void;
  setErrorDeleteMessage: React.Dispatch<React.SetStateAction<boolean>>;
  setErrorMessageUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(todo.done);
  const [EditInputValue, setEditInputValue] = useState<string>(myTodoText);
  const [EditDateValue, setEditDateValue] = useState<string>(date);

  const handleDelete = async () => {
    try {
      await fetchDelete(todo);
      deleteTodo(todo);
    } catch {
      setErrorDeleteMessage(true);
    }
  };

  const handleNewDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditDateValue(e.target.value);
  };

  const handleIsChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    console.log(isChecked);
  };

  const handleNewInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditInputValue(e.target.value);
    console.log(EditInputValue);
  };

  useEffect(() => {
    const updateTodoStatusDone = async () => {
      try {
        await fetchPatch(todo, isChecked, EditInputValue, EditDateValue);
      } catch {
        setErrorMessageUpdate(true);
      }
    };

    updateTodoStatusDone().then((r) => console.log(r));
  }, [isChecked, todo, EditInputValue, EditDateValue, setErrorMessageUpdate]);

  return (
    <>
      <div className="style">
        <li>
          <div className="item">
            <input
              type="text"
              value={EditInputValue}
              onInput={handleNewInput}
            />

            <input type="date" value={EditDateValue} onChange={handleNewDate} />
          </div>
          <div className="button-img-space">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleIsChecked}
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
