import { UsePostContext } from "../context/PostContext.js";
import { applySearchFilter, applySortFilter } from "../utils/filterUtils.js";

export const useFilterPost = () => {
  const { postsData } = UsePostContext();
  const applyFilters = (postsData) => {
    const {
      posts,
      filters: { search, sortBy },
    } = postsData;
    let newPosts = [...posts];
    newPosts = applySearchFilter(newPosts, search);
    newPosts = applySortFilter(newPosts, sortBy);
    return newPosts;
  };
  return { filteredData: applyFilters(postsData) };
};
