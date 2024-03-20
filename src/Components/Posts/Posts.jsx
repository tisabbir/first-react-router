import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import "./../Users/Users.css";

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div>
      <h1>The Posts : {posts.length}</h1>
      <div className="users">
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
