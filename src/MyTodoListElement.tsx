import { Todo } from './Todo.ts';
import { fetchDelete } from './Fetch_File/fetchDelete.tsx';

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

  return (
    <>
      <div className="style">
        <li>
          <div className="item">
            {myTodoText}
            <time>{date} </time>
          </div>
          <div className="button-img-space">
            <input type="checkbox"></input>
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
