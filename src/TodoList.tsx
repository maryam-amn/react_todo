import MyTodoListElement from './MyTodoListElement.tsx';

export const TodList = () => {
  const todoList = [
    'Todo 1',
    'Todo 2',
    'Todo 3 ',
    'Todo 4',
    'Todo 5',
    'Essaie',
  ];

  return (
    <>
      <ul>
        <div className="test">
          {todoList.map((todo, item) => (
            <MyTodoListElement myTodoText={todo} key={item} />
          ))}
        </div>
      </ul>
    </>
  );
};
