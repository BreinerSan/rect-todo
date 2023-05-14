// import logo from './logo.svg';
import { TodoCounter } from './TodoCount';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

import React from 'react';

const deafultTodos = [
  {text: 'Cortar cebolla', completed: false},
  {text: 'Tarea 2', completed: true},
  {text: 'Tarea 3', completed: false},
  {text: 'Tarea 4', completed: true},
  {text: 'Tarea 5', completed: true},
  {text: 'Tarea 6', completed: false},
  {text: 'Tarea 7', completed: false},
];

function App() {
  return (
    <React.Fragment>

      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        {deafultTodos.map(todo => 
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          /> 
        )}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
