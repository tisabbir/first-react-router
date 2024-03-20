import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const { id, title, body } = post;
  return (
    <div>
      <h4>Post No : {id} </h4>
      <h2>Title : {title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default PostDetails;
