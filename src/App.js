// import logo from './logo.svg';
import { TodoCounter } from './TodoCount';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

import React from 'react';

// const deafultTodos = [
//   {text: 'Cortar cebolla', completed: false},
//   {text: 'Tarea 2', completed: true},
//   {text: 'Tarea 3', completed: false},
//   {text: 'Tarea 4', completed: true},
//   {text: 'Tarea 5', completed: true},
//   {text: 'Tarea 6', completed: false},
//   {text: 'Tarea 7', completed: false},
//   {text: 'Tarea 8', completed: true},
// ];

// localStorage.setItem('todos', JSON.stringify(deafultTodos));

function App() {

  const [todos, setTodos] = React.useState( () => {
    const localStorageTodos = localStorage.getItem('todos');
    if(localStorageTodos){
      return JSON.parse(localStorageTodos);
    }else{
      return [];
    }
  });

  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed === true).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(todo => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  });

  const saveTodos = (newTodos) => {
    localStorage.setItem('todos', JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex( todo => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex( todo => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <React.Fragment>

      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map(todo => 
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          /> 
        )}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
