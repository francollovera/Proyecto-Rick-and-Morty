import { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar ({ onSearch }) {
  const [character, setCharacter] = useState("");
  console.log(character);

  const handleChange = (e) => {
    setCharacter(e.target.value);
  }
  

  return (
    <div className={style.container}>
      <input 
        type='search' 
        placeholder= "ID Personaje" 
        className={style.border}
        onChange={handleChange}
        value={character}
      />
      <button 
        onClick={() => onSearch(character) } 
        className={style.btn}>
          Add
      </button>
      </div>
  ) 
}