const MyTodoListElement = ({ myTodoText }: { myTodoText: string }) => {
  return (
    <>
      <li>
        <div>
          {myTodoText}
          <time> 2023/03/02 </time>
        </div>

        <button>delete</button>
      </li>
    </>
  );
};

export default MyTodoListElement;
