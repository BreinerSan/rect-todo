import React from "react";
import "./styles/TodoSearch.css";
import searchIcon from "./assets/search-icon.svg";

function TodoSearch({searchValue, setSearchValue}) {
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