const MyTodoListElement = ({
  myTodoText,
  date,
}: {
  myTodoText: string;
  date: string;
}) => {
  return (
    <>
      <li>
        <div>
          {myTodoText}
          <time>{date} </time>
        </div>
        <div className="button-img-space">
          <input type="checkbox"></input>
          <button className="button-img">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/sf-regular/50/FFFFFF/trash.png"
              alt="trash"
            />{' '}
          </button>
        </div>
      </li>
    </>
  );
};

export default MyTodoListElement;
