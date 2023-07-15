import React from "react";
import "./TodoSearch.css";
import searchIcon from "./../assets/search-icon.svg";
import { TodoContext } from "../TodoContext";

function TodoSearch() {

    const {
        searchValue,
        setSearchValue,
    } = React.useContext(TodoContext);

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