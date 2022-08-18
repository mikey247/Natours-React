//
import classes from "./Tour.module.css";
import { Link } from "react-router-dom";

const Tour = ({ tour }) => {
  return (
    <div className={classes.tour}>
      <img className={classes.tourImage} src={tour.imageCover} alt="tour" />
      <div>
        <h2>{tour.name}</h2>

        <p className={classes.description}>
          {/* {tour.description.slice(0, 100) + "........"} */}
          {tour.summary + "...."}
        </p>
        <Link to={`/tour/${tour.id}`}>
          <button type="">EXPLORE🚀</button>
        </Link>
      </div>
    </div>
  );
};

export default Tour;
