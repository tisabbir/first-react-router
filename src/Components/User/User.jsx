import PropTypes from "prop-types";
import "./user.css";
const User = ({ user }) => {
  const { id, name, email, phone } = user;

  return (
    <div className="user">
      <h2>{name}</h2>
      <p>Email : {email}</p>
      <p>Phone : {phone}</p>
      <p>ID : {id}</p>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object,
};

export default User;
