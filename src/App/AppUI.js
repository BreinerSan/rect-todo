// import logo from './logo.svg';
import { TodoCounter } from '../TodoCounter/index';
import { TodoSearch } from '../TodoSearch/index';
import { TodoList } from '../TodoList/index';
import { TodoItem } from '../TodoItem/index';
import { CreateTodoButton } from '../CreateTodoButton/index';
import { TodosLoading} from '../TodosLoading/index';
import { TodosError } from '../TodosError/index';
import { TodosEmpty } from '../TodosEmpty/index';
import { TodoContext } from '../TodoContext';

import React from 'react';

import './App.css';

function AppUI(){
    return (
    <React.Fragment>

      <TodoCounter />
      <TodoSearch />

      <TodoContext.Consumer>
        {({
          loading,
          error,
          searchedTodos,
          completeTodo,
          deleteTodo
        }) => (
          <TodoList>
            {loading && <TodosLoading />}
            {error && <TodosError />}
            {!loading && searchedTodos.length === 0 && <TodosEmpty />}

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
        )}
      </TodoContext.Consumer>


      <CreateTodoButton />
    </React.Fragment>
  );
}

export {AppUI};