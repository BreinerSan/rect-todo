import "./styles/TodoSearch.css";
import searchIcon from "./assets/search-icon.svg";

function TodoSearch() {
    return (
        <div className="search-container">
            <input placeholder="Ingresa la tarea a registrar"/>
            <img className="search-icon" src={searchIcon} alt="search icon" />
        </div>
    );
}

export {TodoSearch};