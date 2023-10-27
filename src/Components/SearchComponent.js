import React, { useRef } from "react";
import { useGlobalContext } from "./Contex";
import { useEffect } from "react";

const SearchComponent = () => {
  const { setsearchitemValue } = useGlobalContext();
  const targetItem = useRef("");

  const handleChange = (e) => {
    setsearchitemValue(targetItem.current.value);
  };

  useEffect(() => {
    targetItem.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="cocktail">
          search your favourite cocktail by first letter
        </label>
        <input
          type="text"
          id="cocktail"
          placeholder="search by name"
          ref={targetItem}
          onChange={handleChange}
        />
      </form>
    </>
  );
};

export default SearchComponent;
