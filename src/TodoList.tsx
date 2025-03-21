import MyTodoListElement from './MyTodoListElement.tsx';
import { Todo } from './Todo.ts';
import ErrorComponent from './ErrorComponent.tsx';
import { useTodoStore } from './useTodoStore.ts';

const TodoList = ({
  todoList,
  deleteTodo,
}: {
  todoList: Todo[];
  deleteTodo: (todo: Todo) => void;
}) => {
  const {
    deleteErrormessage,
    updateErrorMessage,
    UpdateMessage,
    DeleteMessage,
  } = useTodoStore();
  return (
    <>
      <div>
        {deleteErrormessage && (
          <ErrorComponent
            message={
              'We can not delete your to-dos, please check your network.'
            }
          />
        )}
        {updateErrorMessage && (
          <ErrorComponent
            message={'We can not update your todos, please check your network '}
          />
        )}
        <ul>
          <div className="my-todo-list-style">
            {todoList.map((todo) => (
              <MyTodoListElement
                setErrorMessageUpdate={UpdateMessage}
                setErrorDeleteMessage={DeleteMessage}
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
