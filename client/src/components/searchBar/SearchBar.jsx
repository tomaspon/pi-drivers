import { useState } from "react";
import { useDispatch } from "react-redux";
import style from "./SearchBar.module.css";
import { searchDriver } from "../../redux/actions";

const SearchBar = ()=>{
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleChange = (e) => {
    const searchValue = e.target.value;
    setName(searchValue);
  };

  const handleSearch = () => {
    // Despachamos la acción para buscar conductores por nombre.
    dispatch(searchDriver(name));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // Si se presiona la tecla "Enter", realizamos la búsqueda.
      handleSearch();
    }
  };

    return (
        <div className={style.searchContainer}>
      <input
        type="search"
        className={style.searchInput}
        placeholder="Search driver"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        value={name}
      />
        <button className={style.searchButton} onClick={handleSearch}>
          <img src="https://cdn2.iconfinder.com/data/icons/web-technology-solid/100/solid_search_lupa_find-512.png" alt="" />
        </button>
      </div>
    )
}

export default SearchBar