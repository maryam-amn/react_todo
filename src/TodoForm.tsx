import React, { useState } from 'react';
import ErrorComponent from './ErrorComponent.tsx';
import { Todo } from './Todo.ts';
import { fetchPost } from './Fetch_File/fetchPost.tsx';
import { useTodoStore } from './useTodoStore.ts';

export const TodoForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [date, setDate] = useState('');
  const [errorInput, seterrorInput] = useState(false);
  const [errorAddTodo, seterrorAddTodo] = useState(false);

  const AddToMyList = useTodoStore((state) => state.addToMyList);

  const sort = useTodoStore((state) => state.ChangeSort);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addNewTodo = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.length === 0) {
      seterrorInput(true);
    } else {
      const addToMyListAndToTheAPI = async () => {
        try {
          const newList: Todo = {
            title: inputValue,
            due_date: date,
            content: inputValue,
            id: inputValue,
            done: false,
          };
          await fetchPost(inputValue, date);
          AddToMyList(newList);
          seterrorAddTodo(false);
        } catch {
          seterrorAddTodo(true);
        }
      };

      await addToMyListAndToTheAPI();
      setInputValue('');
      setDate('');
      seterrorInput(false);
    }
  };

  const handleChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  console.log();
  return (
    <>
      <div className="div-background-input">
        <form onSubmit={addNewTodo}>
          <button> Add a to do</button>
          <input
            type="text"
            placeholder="Enter a to do "
            onChange={handleInput}
            value={inputValue}
          />
          <input
            type="date"
            id="date"
            value={date}
            onChange={handleChangeDate}
          ></input>
          <select onChange={(e) => sort(e.target.value)}>
            <option value="name"> name (A- Z)</option>
            <option value="due-date"> due date</option>

            <option value="done"> done</option>
            <option value="undone"> undone</option>
          </select>
        </form>
      </div>
      {errorInput && (
        <ErrorComponent
          message={'We cannot add your to-do, please  enter a valid todo '}
        />
      )}
      {errorAddTodo && (
        <ErrorComponent
          message={'We cannot add your to-do, please  check your network '}
        />
      )}
    </>
  );
};
