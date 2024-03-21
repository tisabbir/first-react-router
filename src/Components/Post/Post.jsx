import { Link, useNavigate } from "react-router-dom";
import "./../User/user.css";
const Post = ({ post }) => {
  const { id, title } = post;
  const navigate = useNavigate();

  const handleShowDetails = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div className="user">
      <h4>Post No : {id}</h4>
      <h3>Title : {title}</h3>
      <Link to={`/post/${id}`}>
        <button>See Details</button>
      </Link>
      <br />
      <button onClick={handleShowDetails}>Show Details</button>
    </div>
  );
};

export default Post;
