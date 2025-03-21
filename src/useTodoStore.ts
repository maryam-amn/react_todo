import { create } from 'zustand/react';
import { Todo } from './Todo.ts';

type UseTodoStore = {
  list: Todo[];
  addToMyList: (todo: Todo) => void;
  removeFromMyList: (id: Todo) => void;
  getAllMyListFromGet: (todos: Todo[]) => void;
  updateTodo: (todo: Todo) => void;
  sort: string;
  ChangeSort: (sort: string) => void;
  errormessage: (error: string | null) => void;
  error: string | null;
};

export const useTodoStore = create<UseTodoStore>((set) => ({
  list: [],
  sort: 'name',
  error: null,
  updateTodo: (todo) =>
    set((state) => ({
      list: state.list.map((t) => (t.id === todo.id ? todo : t)),
    })),
  addToMyList: (todo) =>
    set((state) => ({
      list: [...state.list, todo],
    })),
  getAllMyListFromGet: (todo: Todo[]) =>
    set(() => ({
      list: todo,
    })),
  removeFromMyList: (todo: Todo) =>
    set((state) => ({
      list: state.list.filter((t) => t.id !== todo.id),
    })),
  ChangeSort: (sort: string) =>
    set(() => ({
      sort: sort,
    })),

  errormessage: (error) => set({ error }),
}));
