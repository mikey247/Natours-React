//
import classes from "./Tour.module.css";
const Tour = ({ tour }) => {
  return (
    <>
      <div className={classes.tour}>
        <img className={classes.tourImage} src={tour.imageCover} alt="tour" />
        <div>
          <h2>{tour.name}</h2>

          <p className={classes.description}>
            {tour.description.slice(0, 100) + "........"}
          </p>
          <button type="">BOOK NOW</button>
        </div>
      </div>
    </>
  );
};

export default Tour;
