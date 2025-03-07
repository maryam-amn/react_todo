import MyTodoListElement from './MyTodoListElement.tsx';
import { Todo } from './interface.tsx';

const TodoList = ({ todoList }: { todoList: Todo[] }) => {
  return (
    <>
      <div>
        <ul>
          <div className="my-todo-list-style">
            {todoList.map((todo) => (
              <MyTodoListElement
                myTodoText={todo.title}
                date={todo.due_date}
                key={todo.id}
              />
            ))}
          </div>
        </ul>
      </div>
    </>
  );

  // TodList.tsx
};

export default TodoList;
