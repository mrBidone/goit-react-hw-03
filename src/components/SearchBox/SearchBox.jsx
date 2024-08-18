import { useId } from "react";

const SearchBox = ({ filterValue, handleFilter }) => {
  return (
    <div>
      <label htmlFor="">
        Find contacts by name
        <input
          type="text"
          placeholder="Enter contact name"
          value={filterValue}
          onChange={handleFilter}
        />
      </label>
    </div>
  );
};

export default SearchBox;
