import { useState } from 'react';

export const TodoForm = ({
  addTodo,
}: {
  addTodo: (addToList: string, addDate: string) => void;
}) => {
  const [inputValue, setInputValue] = useState('');
  const [date, setDate] = useState('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addNewTodo = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(inputValue, date);
    setInputValue('');
    setDate('');
  };

  {
    const handleChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
      setDate(e.target.value);
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
            <input
              type="date"
              id="date"
              value={date}
              onChange={handleChangeDate}
            ></input>
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
  }
};
