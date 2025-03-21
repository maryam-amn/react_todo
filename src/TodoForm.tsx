import React, { useState } from 'react';
import ErrorComponent from './ErrorComponent.tsx';

export const TodoForm = ({
  addTodo,
  sorting,
}: {
  addTodo: (addToList: string, addDate: string) => void;
  sorting: (sortType: string) => void;
}) => {
  const [inputValue, setInputValue] = useState('');
  const [date, setDate] = useState('');
  const [errorInput, seterrorInput] = useState(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addNewTodo = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.length === 0) {
      seterrorInput(true);
    } else {
      addTodo(inputValue, date);
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
          <select onChange={(e) => sorting(e.target.value)}>
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
    </>
  );
};
