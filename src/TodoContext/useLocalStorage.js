import React from 'react';

function useLocalStorage(itemName, initialValue) {

  const [item, setItem] = React.useState(initialValue);

  const [loading, setLoading] = React.useState(true);

  const [error, setError] = React.useState(false);
  
  React.useEffect(() => {

    setTimeout(() => {
      try {

        const localStorageItem = localStorage.getItem(itemName);
    
        let parsedItem;
  
        if(localStorageItem){
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }else{
          parsedItem = initialValue;
          localStorage.setItem(itemName, JSON.stringify(parsedItem));
        }
  
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 3000);
    
  },[]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {item, saveItem, loading, error};
}

export { useLocalStorage }

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