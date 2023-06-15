export const applySearchFilter = (posts, search) => {
  return search.length === 0
    ? posts
    : posts.filter(
        (post) =>
          post.title.toLowerCase().includes(search.toLowerCase()) ||
          post.body.toLowerCase().includes(search.toLowerCase())
      );
};

export const applySortFilter = (posts, sortBy) =>
  sortBy === "default"
    ? posts
    : [...posts].sort((a, b) => (a.title >= b.title ? 1 : -1));
