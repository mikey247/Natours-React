//

import classes from "./Home.module.css";
import { motion } from "framer-motion";
import Offer from "../components/Offer";
import { Link } from "react-router-dom";

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
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "ease", delay: 2, duration: 1 }}
          >
            COME AND EXPLORE NATURE WITH US
          </motion.h1>
          <Link to={"/tours-list"}>
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "tween", delay: 2, duration: 1 }}
            >
              START EXPLORING🌍✈
            </motion.button>
          </Link>
        </div>{" "}
      </motion.div>

      <motion.div className={classes.some}>
        <div className={classes.some1}>
          <motion.img
            src={require("../images/Lafiaji-beach.jpg")}
            alt="Lafiaji Beaches"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              duration: 2,
              ease: "easeIn",
              // delay: 0.2,
            }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              duration: 2,
              ease: "easeIn",
              // delay: 0.2,
            }}
          >
            <h1>EVENINGS AT THE LAFIAJI BEACHES</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              voluptas doloremque repellendus, esse quis ipsum quam soluta
              totam! Impedit a possimus consequuntur quos quod. Sed eligendi
              praesentium ipsam sint mollitia!
            </p>
            <Link to={"/tours-list"}>
              <button>LEARN MORE</button>
            </Link>
          </motion.div>
        </div>

        <motion.div className={classes.some2}>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              duration: 2,
              ease: "easeIn",
              // delay: 0.2,
            }}
          >
            <h1 className={classes.light}>
              BATHE IN THE WATERFALLS OF ERIN-IJESHA
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto, minus consectetur eveniet vitae ea corrupti enim quam
              eos dignissimos consequatur? A ullam aperiam quisquam officia quam
              nulla qui nisi distinctio!
            </p>
            <Link to={"/tours-list"}>
              <button>LEARN MORE</button>
            </Link>
          </motion.div>
          <motion.img
            src={require("../images/erin-ijesha-waterfalls.jpg")}
            alt="Erin-Ijesha Waterfalls"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              duration: 2,
              ease: "easeIn",
              // delay: 0.2,
            }}
          />
        </motion.div>
      </motion.div>

      <Offer />
    </>
  );
};

export default Home;
