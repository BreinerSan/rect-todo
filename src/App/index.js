import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';



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

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed === true).length;
  const totalTodos = todos.length;

  console.log("log 1");
  React.useEffect(() => {
    console.log("log00000000000 2");
  }, [totalTodos]);
  console.log("log 3");

  const searchedTodos = todos.filter(todo => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  });

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

  return(
    <AppUI 
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    >
    </AppUI>
  );
}

export default App;
