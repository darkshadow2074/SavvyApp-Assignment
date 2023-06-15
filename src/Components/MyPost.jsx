import { Header } from "./Header.jsx";
import { PostData } from "./PostData.jsx";

const MyPost = () => {
  return (
    <div className="my-post-container">
      <Header />
      <div className="my-post-body">
        <PostData />
      </div>
    </div>
  );
};

export default MyPost;
