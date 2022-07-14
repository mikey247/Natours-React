//

import classes from "./Home.module.css";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <motion.div
        className={classes.container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "spring", duration: 3 }}
      >
        <div className={classes.wrapper}>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", delay: 3, duration: 5 }}
          >
            COME AND EXPLORE NATURE WITH US
          </motion.h1>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", delay: 3.5, duration: 5 }}
          >
            START EXPLORING🌍✈
          </motion.button>
        </div>{" "}
      </motion.div>

      <div className={classes.some}>
        <div className={classes.some1}>
          <img
            src={require("../images/Lafiaji-beach.jpg")}
            alt="Lafiaji Beaches"
          />
          <div>
            <h1>EVENINGS AT THE LAFIAJI BEACHES</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              voluptas doloremque repellendus, esse quis ipsum quam soluta
              totam! Impedit a possimus consequuntur quos quod. Sed eligendi
              praesentium ipsam sint mollitia!
            </p>
          </div>
        </div>

        <div className={classes.some2}>
          <div>
            <h1>BATHE IN THE WATERFALLS OF ERIN-IJESHA</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto, minus consectetur eveniet vitae ea corrupti enim quam
              eos dignissimos consequatur? A ullam aperiam quisquam officia quam
              nulla qui nisi distinctio!
            </p>
          </div>
          <img
            src={require("../images/erin-ijesha-waterfalls.jpg")}
            alt="Erin-Ijesha Waterfalls"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
