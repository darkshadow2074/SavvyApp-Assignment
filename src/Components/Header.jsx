import "./Header.css";
import { AiOutlineSearch } from "react-icons/ai";
import { UsePostContext } from "../context/PostContext.js";
import { SEARCH_DATA } from "../reducer/actionTypes.js";

export const Header = () => {
  const {
    postsData: { filters },
    dispatch,
    error,
  } = UsePostContext();
  const handleSearchInput = (e) =>
    dispatch({ type: SEARCH_DATA, payload: e.target.value });
  return (
    <div className="header-container">
      <h2>MyPost</h2>
      {!error && (
        <div className="searchbox">
          <AiOutlineSearch />
          <input
            onChange={handleSearchInput}
            type="text"
            placeholder="Search specific posts"
            value={filters.search}
          />
        </div>
      )}
    </div>
  );
};
