# Todo App

A simple Todo App built with React and TailwindCSS. This app allows users to add, complete, and delete todos with an undo option.

## Features

- Add new todos
- Mark todos as complete/incomplete
- Delete todos with an undo option
- Responsive design utilizing TailwindCSS
- Handles long text without overflow issues

## Usage

1. Add a new todo by typing in the input field and pressing "Add".
2. Mark a todo as complete by clicking the "Complete" button.
3. Delete a completed todo by clicking the "Delete?" button and confirm by clicking "Delete". You can undo the delete action by clicking "Undo".
4. Mark a completed todo as incomplete by clicking the "Undo" button.

## Components

### TodoForm.js

Handles the form for adding new todos.

### TodoItem.js

Displays individual todo items with options to mark as complete, delete, or undo.

### TodoList.js

Displays the list of todos in a grid layout.

### App.js

Main application component that manages the state and renders the TodoForm and TodoList components.

## Styling

TailwindCSS is used for styling. The project is configured to use TailwindCSS classes directly in the JSX.
