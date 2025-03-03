import { useState } from 'react';

export const TodoForm = ({
  ListTodo,
  addTodo,
}: {
  ListTodo: string[];
  addTodo: (addToList: string) => void;
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addNewTodo = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    addTodo(inputValue);

    setInputValue('');

    console.log(ListTodo);
  };

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
          <input type="date"></input>
          <select>
            <option> Sort</option>
            <option> due date</option>
            <option> name</option>
            <option> done</option>
            <option> undone</option>
          </select>
        </form>
      </div>
    </>
  );
};
