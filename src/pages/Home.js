//

import classes from "./Home.module.css";
import { motion } from "framer-motion";
import Offer from "../components/Offer";

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
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "ease", delay: 2, duration: 2 }}
          >
            COME AND EXPLORE NATURE WITH US
          </motion.h1>
          <motion.button
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "ease", delay: 3, duration: 2 }}
          >
            START EXPLORING🌍✈
          </motion.button>
        </div>{" "}
      </motion.div>

      <motion.div className={classes.some}>
        <motion.div
          className={classes.some1}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            duration: 2,
            ease: "easeIn",
            // delay: 0.2,
          }}
        >
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
            <button>LEARN MORE</button>
          </div>
        </motion.div>

        <motion.div
          className={classes.some2}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            duration: 2,
            ease: "easeIn",
            // delay: 0.2,
          }}
        >
          <div>
            <h1>BATHE IN THE WATERFALLS OF ERIN-IJESHA</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto, minus consectetur eveniet vitae ea corrupti enim quam
              eos dignissimos consequatur? A ullam aperiam quisquam officia quam
              nulla qui nisi distinctio!
            </p>
            <button>LEARN MORE</button>
          </div>
          <img
            src={require("../images/erin-ijesha-waterfalls.jpg")}
            alt="Erin-Ijesha Waterfalls"
          />
        </motion.div>
      </motion.div>

      <Offer />
    </>
  );
};

export default Home;
