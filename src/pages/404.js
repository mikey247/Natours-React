//
import { Link } from "react-router-dom";
import classes from "./404.module.css";

const NotFound = () => {
  return (
    <div className={classes.container}>
      <h1>Oops,Page Not Found</h1>
      <p>
        Go back{" "}
        <Link to={"/"}>
          <span>home</span>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
