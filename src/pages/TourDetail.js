//
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import classes from "./TourDetail.module.css";
import Map from "../components/Map";
// import { AiFillStar } from "react-icons";
import Rating from "@mui/material/Rating";

const TourDetail = () => {
  const { id } = useParams();

  const [tour, setTour] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://natours-nu.vercel.app/api/v1/tours/${id}`)
      .then((res) => res.json())
      .then((result) => {
        // console.log(result.data.data);
        setTour(result.data.data);
        setIsLoading(false);
      });

    return () => {};
  }, [id]);

  if (isLoading) {
    return <h1 className={classes.loading}>Loading...</h1>;
  }

  return (
    <div className={classes.detailContainer}>
      <div className={classes.detail}>
        <div className={classes.imageDiv}>
          <img src={tour.imageCover} alt="" />
        </div>
        <div className={classes.contentDiv}>
          <h1>{tour.name}</h1>
          <p>
            <Rating name="read-only" value={tour.ratingsAverage} readOnly />
          </p>
          <p>{tour.description}</p>
          <button type="">BOOK NOW</button>
        </div>
      </div>

      <div className={classes.reviews}>
        <h1>REVIEWS</h1>
        {tour.reviews.map((review) => (
          <div key={review.user._id}>
            <div className={classes.nameRating}>
              <h3>{review.user.name}</h3>{" "}
              <p>
                <Rating name="read-only" value={review.rating} readOnly />
              </p>
            </div>
            <p className={classes.reviewText}>{review.review}</p>
          </div>
        ))}
      </div>
      <Map tour={tour} />
    </div>
  );
};

export default TourDetail;
