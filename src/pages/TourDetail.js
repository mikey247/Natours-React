//
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import classes from "./TourDetail.module.css";

const TourDetail = () => {
  const { id } = useParams();

  const [tour, setTour] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://natours-nu.vercel.app/api/v1/tours/${id}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result.data.data);
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
          {/* <Example /> */}
        </div>
        <div className={classes.contentDiv}>
          <h1>{tour.name}</h1>
          <p>{tour.description}</p>
          <button type="">BOOK NOW</button>
        </div>
      </div>
    </div>
  );
};

export default TourDetail;
