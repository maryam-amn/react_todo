import { create } from 'zustand/react';
import { Todo } from './Todo.ts';

type UseTodoStore = {
  list: Todo[];
  addToMyList: (todo: Todo) => void;
  removeFromMyList: (id: Todo) => void;
  getAllMyListFromGet: (todos: Todo[]) => void;
  sort: string;
  ChangeSort: (sort: string) => void;
};

export const useTodoStore = create<UseTodoStore>((set) => ({
  list: [],
  sort: 'name',

  addToMyList: (todo) =>
    set((state) => ({
      list: [...state.list, todo],
    })),
  getAllMyListFromGet: (todo: Todo[]) =>
    set(() => ({
      list: todo,
    })),
  removeFromMyList: (id: Todo) =>
    set((state) => ({
      list: [...state.list, id].filter((t) => t !== id),
    })),
  ChangeSort: (sort: string) =>
    set(() => ({
      sort: sort,
    })),
}));
