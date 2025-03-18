import MyTodoListElement from './MyTodoListElement.tsx';
import { Todo } from './Todo.ts';
import ErrorComponent from './ErrorComponent.tsx';
import { useState } from 'react';

const TodoList = ({
  todoList,
  deleteTodo,
}: {
  todoList: Todo[];
  deleteTodo: (todo: Todo) => void;
}) => {
  const [errorMessageDelete, setmessageErrorDelete] = useState<boolean>(false);
  const [errorMessageUpdate, setmessageErrorUpdate] = useState<boolean>(false);

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
            {todoList.map((todo) => (
              <MyTodoListElement
                setErrorMessageUpdate={setmessageErrorUpdate}
                setErrorDeleteMessage={setmessageErrorDelete}
                myTodoText={todo.title}
                date={todo.due_date}
                todo={todo}
                deleteTodo={deleteTodo}
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
