// import logo from './logo.svg';
import { TodoCounter } from '../TodoCount/index';
import { TodoSearch } from '../TodoSearch/index';
import { TodoList } from '../TodoList/index';
import { TodoItem } from '../TodoItem/index';
import { CreateTodoButton } from '../CreateTodoButton/index';

import React from 'react';

import './App.css';

function AppUI({
  loading,
  error,
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo
}){
    return (
    <React.Fragment>

      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {loading && <p>Loading...</p>}
        {error && <p>Error al cargar los items</p>}
        {!loading && searchedTodos.length === 0 && <p>Crea tu primer todo</p>}

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

export {AppUI};