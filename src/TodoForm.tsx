
export const TodoForm = () => {
  return (
    <>
      <div className="div-background-input">
        <form>
          <button> Add a to do</button>
          <input placeholder="Enter a to do " />
          <input type={'date'}></input>
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


