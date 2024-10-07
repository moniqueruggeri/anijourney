import searchIcon from "../img/search.svg"
import filterIcon from "../img/filters.svg"
import "./SearchBar.css"

const SearchBar = () => {
    return (
        <div className="searchBar">
            <img src={searchIcon} alt="Pesquisa"/>
            <input/>
            <img src={filterIcon} alt="Filtros de pesquisa"/>
        </div>
    )
}

export default SearchBar