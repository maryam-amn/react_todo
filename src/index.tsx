import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TodoForm } from './TodoForm.tsx';
import { TodList } from './TodoList.tsx';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App />
      <TodoForm />
      <TodList />
    </React.StrictMode>,
  );
}
