//
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import classes from "./TourDetail.module.css";
import Map from "../components/Map";

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

  // console.log(tour.startLocation.coordinates);

  return (
    <div className={classes.detailContainer}>
      <div className={classes.detail}>
        <div className={classes.imageDiv}>
          <img src={tour.imageCover} alt="" />
          {/* <Example /> */}
        </div>
        <div className={classes.contentDiv}>
          <h1>{tour.name}</h1>
          <p>
            Rating:{tour.ratingsAverage} ({tour.ratingsQuantity})
          </p>
          <p>{tour.description}</p>
          <button type="">BOOK NOW</button>
        </div>
      </div>

      <div>
        <h1>Reviews</h1>
        {tour.reviews.map((review) => (
          <div key={review.user._id}>
            <h3>{review.user.name}</h3> <p>{review.rating} stars</p>
            <p>{review.review}</p>
          </div>
        ))}
      </div>
      <Map tour={tour} />
    </div>
  );
};

export default TourDetail;
