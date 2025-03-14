import { Todo } from './Todo.ts';
import { fetchDelete } from './Fetch_File/fetchDelete.tsx';
import React, { useEffect, useState } from 'react';
import { fetchPatch } from './Fetch_File/fetchPatch.tsx';

const MyTodoListElement = ({
  myTodoText,
  date,
  todo,
  deleteTodo,
}: {
  myTodoText: string;
  date: string;
  todo: Todo;
  deleteTodo: (todo: Todo) => void;
}) => {
  const handleDelete = async () => {
    await fetchDelete(todo);
    deleteTodo(todo);
  };
  const [isChecked, setIsChecked] = useState<boolean>(todo.done);

  const handleChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    console.log(isChecked);
  };

  useEffect(() => {

    const updateTodoStatusDone = async () => {
      await fetchPatch(todo, isChecked);
    };
    updateTodoStatusDone().then((r) => console.log(r));
  }, [isChecked, fetchPatch, todo]);

  return (
    <>
      <div className="style">
        <li>
          <div className="item">
            {myTodoText}
            <time>{date} </time>
          </div>
          <div className="button-img-space">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleChangeDate}
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
