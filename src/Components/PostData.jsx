import { useMemo, useState } from "react";
import { UsePostContext } from "../context/PostContext.js";
import { useFilterPost } from "../filters/useFilterPost.js";
import { SORT_BY } from "../reducer/actionTypes.js";
import { ERROR_IMAGE } from "../utils/imageImport.js";
import { EmptyPost } from "./EmptyPost.jsx";
import { Loader } from "./Loader.jsx";
import Pagination from "../Pagination/Pagination.jsx";
import { PostCard } from "./PostCard.jsx";

import "./PostBody.css";

export const PostData = () => {
  const {
    postsData: { posts },
    dispatch,
    isLoading,
    error,
  } = UsePostContext();
  const PageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const { filteredData } = useFilterPost();
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return filteredData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, posts]);

  const onSelectHandler = (e) =>
    dispatch({ type: SORT_BY, payload: e.target.value });

  if (error) {
    return (
      <div className="error-page">
        <img src={ERROR_IMAGE} alt="error" />
        <div className="bottom-section">
          <p className="primary-text">Hey, Something went wrong!!!</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {isLoading && <Loader />}
      {filteredData.length > 0 ? (
        <div className="post-container">
          <div className="post-header">
            <h2>All Posts - {posts?.length}</h2>
            <select className="sort-container" onChange={onSelectHandler}>
              <option value="default">Recommended</option>
              <option value="sortByTitle">Sort By: Title</option>
            </select>
          </div>
          <div className="post-data">
            {currentTableData.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={posts.length}
              pageSize={PageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
      ) : (
        <EmptyPost />
      )}
    </>
  );
};
