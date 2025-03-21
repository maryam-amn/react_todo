import { create } from 'zustand/react';
import { Todo } from './Todo.ts';

type UseTodoStore = {
  list: Todo[];
  addToMyList: (todo: Todo) => void;
  removeFromMyList: (id: Todo) => void;
  getAllMyListFromGet: (todo: []) => void;
  sort: string;
  ChangeSort: (sort: string) => void;
  addErrormessage: boolean;
  updateErrorMessage: boolean;
  deleteErrormessage: boolean;
  AddMessage: (message: boolean) => void;
  UpdateMessage: (message: boolean) => void;
  DeleteMessage: (message: boolean) => void;
};

export const useTodoStore = create<UseTodoStore>((set) => ({
  list: [],
  sort: 'name',
  addErrormessage: false,
  updateErrorMessage: false,
  deleteErrormessage: false,
  addToMyList: (todo: Todo) =>
    set((state) => ({
      list: [...state.list, todo],
    })),
  getAllMyListFromGet: (todo: []) =>
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

  AddMessage: (message: boolean) =>
    set({
      addErrormessage: message,
    }),

  UpdateMessage: (message: boolean) =>
    set({
      updateErrorMessage: message,
    }),

  DeleteMessage: (message: boolean) =>
    set({
      deleteErrormessage: message,
    }),
}));
