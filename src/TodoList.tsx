import MyTodoListElement from './MyTodoListElement.tsx';
import { Todo } from './Todo.ts';

const TodoList = ({
  todoList,
  deleteTodo,
}: {
  todoList: Todo[];
  deleteTodo: (todo: Todo) => void;
}) => {
  return (
    <>
      <div>
        <ul>
          <div className="my-todo-list-style">
            {todoList.map((todo) => (
              <MyTodoListElement
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
