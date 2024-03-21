import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <h1> Opps! </h1>
      <p>Sorry! an unexpected error have been occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to={"/"}>Home</Link>
    </div>
  );
};

export default ErrorPage;
