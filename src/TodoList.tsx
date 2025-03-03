import MyTodoListElement from './MyTodoListElement.tsx';

export const TodList = ({ todoList }: { todoList: string[] }) => {
  return (
    <>
      <div>
        <ul>
          <div className="my-todo-list-style">
            {todoList.map((todo, item) => (
              <MyTodoListElement myTodoText={todo} key={item} />
            ))}
          </div>
        </ul>
      </div>
    </>
  );
};
