//

import { useEffect, useState } from "react";
import Tour from "../components/Tour";
import classes from "./ToursList.module.css";

const ToursList = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://natours-nu.vercel.app/api/v1/tours")
      .then((res) => res.json())
      .then((result) => {
        console.log(result.data.data);
        setTours(result.data.data);
        setIsLoading(false);
      });

    return () => {};
  }, []);

  if (isLoading) {
    return <h1 className={classes.loading}>Loading...</h1>;
  }

  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>TOURS</h1>
      <div className={classes.list}>
        {tours.map((tour) => (
          <Tour tour={tour} key={tour.id} />
        ))}
      </div>
    </div>
  );
};

export default ToursList;
