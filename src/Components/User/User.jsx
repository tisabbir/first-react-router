import PropTypes from "prop-types";
import "./user.css";
import { Link } from "react-router-dom";
const User = ({ user }) => {
  const { id, name, email, phone } = user;

  return (
    <div className="user">
      <h2>{name}</h2>
      <p>Email : {email}</p>
      <p>Phone : {phone}</p>
      <p>ID : {id}</p>
      <Link to={`/user/${id}`}>Show Details</Link>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object,
};

export default User;
