import React, { useState } from 'react';
import { fetchPost } from './Fetch_File/fetchPost.tsx';
import { useTodoStore } from './useTodoStore.ts';
import { useShallow } from 'zustand/react/shallow';

export const TodoForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [date, setDate] = useState('');

  const { AddToMyList, sort, error } = useTodoStore(
    useShallow((state) => ({
      AddToMyList: state.addToMyList,
      sort: state.ChangeSort,
      error: state.errormessage,
    })),
  );

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addNewTodo = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.length > 0) {
      const addToMyListAndToTheAPI = async () => {
        try {
          const newTodo = await fetchPost(inputValue, date);
          AddToMyList(newTodo);
          error(null);
        } catch {
          error('We cannot add your to-do, please  check your network');
        }
      };
      await addToMyListAndToTheAPI();
      setInputValue('');
      setDate('');
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
    </>
  );
};
