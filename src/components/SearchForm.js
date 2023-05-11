import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  const searchRef = useRef("");
  const searchCocktail = () => {
    setSearchTerm(searchRef.current.value);
  };

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  return (
    <section
      className="section search"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <form action="" className="search-form">
        <div className="form-control">
          <label htmlFor="name">search your favourite cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchRef}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
