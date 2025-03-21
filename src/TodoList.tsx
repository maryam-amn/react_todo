import MyTodoListElement from './MyTodoListElement.tsx';
import { Todo } from './Todo.ts';
import ErrorComponent from './ErrorComponent.tsx';
import { useState } from 'react';
import { useTodoStore } from './useTodoStore.ts';

const TodoList = () => {
  const [errorMessageUpdate, setmessageErrorUpdate] = useState<boolean>(false);
  const [errorMessageDelete, setmessageErrorDelete] = useState<boolean>(false);

  let sortedTodos: Todo[];

  const sort = useTodoStore((state) => state.sort);
  const list = useTodoStore((state) => state.list);

  if (sort === 'due-date') {
    sortedTodos = [...list].sort((a, b) => {
      return new Date(b.due_date).getTime() - new Date(a.due_date).getTime();
    });
  } else if (sort === 'name') {
    sortedTodos = [...list].sort((a, b) => a.title.localeCompare(b.title));
  } else if (sort === 'done') {
    sortedTodos = [...list].sort((a, b) => (b.done > a.done ? 1 : -1));
    sortedTodos = sortedTodos.filter((todo) => todo.done);
  } else if (sort === 'undone') {
    sortedTodos = [...list].sort((a, b) => (a.done > b.done ? 1 : -1));
    sortedTodos = sortedTodos.filter((todo) => !todo.done);
  } else {
    sortedTodos = [...list];
  }
  return (
    <>
      <div>
        {errorMessageDelete && (
          <ErrorComponent
            message={
              'We can not delete your to-dos, please check your network.'
            }
          />
        )}
        {errorMessageUpdate && (
          <ErrorComponent
            message={'We can not update your todos, please check your network '}
          />
        )}
        <ul>
          <div className="my-todo-list-style">
            {sortedTodos.map((todo) => (
              <MyTodoListElement
                setErrorMessageUpdate={setmessageErrorUpdate}
                setErrorDeleteMessage={setmessageErrorDelete}
                myTodoText={todo.title}
                date={todo.due_date}
                todo={todo}
                key={todo.id}
              />
            ))}
          </div>
        </ul>
      </div>
    </>
  );
};

export default TodoList;
