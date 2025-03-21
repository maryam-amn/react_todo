import MyTodoListElement from './MyTodoListElement.tsx';
import { Todo } from './Todo.ts';

import { useTodoStore } from './useTodoStore.ts';

const TodoList = () => {
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
        <ul>
          <div className="my-todo-list-style">
            {sortedTodos.map((todo) => (
              <MyTodoListElement todo={todo} key={todo.id} />
            ))}
          </div>
        </ul>
      </div>
    </>
  );
};

export default TodoList;
