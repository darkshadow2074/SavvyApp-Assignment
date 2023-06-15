import "./PostBody.css";
export const PostCard = ({ id, title, body }) => {
  return (
    <div className="post-card">
      <div className="post-title">
        <h2>{title}</h2>
      </div>
      <div className="post-body">
        <p>{body}</p>
      </div>
    </div>
  );
};
