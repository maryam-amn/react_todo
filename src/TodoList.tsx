import MyTodoListElement from './MyTodoListElement.tsx';
import { Todo } from './interface.tsx';

const TodoList = ({ todoList }: { todoList: Todo[] }) => {
  return (
    <>
      <div>
        <ul>
          <div className="my-todo-list-style">
            {todoList.map((todo, item) => (
              <MyTodoListElement
                myTodoText={todo.title}
                date={todo.due_date}
                key={item}
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
