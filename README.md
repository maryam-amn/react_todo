# Web to-do list

## Description

This to-do list web application allows users to add, delete, and update tasks efficiently,
helping improve their personal organization.

## Feature

- Add a task : the user can add a Todo with a date (optional)
- Delete a task: the user can remove a task from the list
- Status of the todos : each todo can be done or undone via a checkbox
- Edit a task : : The user can edit the content or date of a task by clicking on the corresponding field.
- Sort the todo : the user can sort the task by
  - name (A-Z)
  - due date
  - task done / undone

## Technology used

- React
  - useState
  - zustand
- API : used to save all the task on a server
- CSS : used for the style of thw web page

## Setup

Install the dependencies:

```bash
pnpm install
```

Clone the repository

```bash
git clone git@github.com:maryam-amn/react_todo.git
```

Start the dev server:

```bash
pnpm dev
```

Build the app for production:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```
