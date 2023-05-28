import React from "react";
import "./styles/TodoSearch.css";
import searchIcon from "./assets/search-icon.svg";

function TodoSearch() {

    const [searchValue, setSearchValue] = React.useState('');

    console.log('buscando', searchValue);

    return (
        <div className="search-container">
            <input 
                placeholder="Ingresa la tarea a registrar"
                value={searchValue}
                onChange={(event) => {
                    setSearchValue(event.target.value);
                }}
            />
            <img className="search-icon" src={searchIcon} alt="search icon" />
        </div>
    );
}

export {TodoSearch};