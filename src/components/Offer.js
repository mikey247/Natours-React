//
import classes from "./Offer.module.css";
import { motion } from "framer-motion";

const Offer = () => {
  return (
    <>
      <motion.div
        className={classes.offerContainer}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", duration: 3, ease: "easeOut" }}
      >
        <div className={classes.offerWrapper}>
          <h1 className={classes.top}>WHAT DO WE BRING TO THE TABLE?😏</h1>
          <p>
            We provide amazing experiences that will last you a lifetime.
            Doesn't matter if it's single trips, couples trips, family or group
            trips we are the best choice for you and you wont have to break the
            bank to get the time of your life, Come over to the Natours side of
            life💚.
          </p>
          <button>LEARN MORE</button>
        </div>
      </motion.div>

      <motion.div
        className={classes.news}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", duration: 3, ease: "easeOut" }}
      >
        <h1>SUBSCRIBE TO OUR NEWSLETTER📰</h1>
        <p>Get latest news and updates on our latest offers.</p>
        <div className={classes.email}>
          <input type="email" placeholder="Enter Your Email" /> <br />
          <button>LET'S GO</button>
        </div>
      </motion.div>
    </>
  );
};

export default Offer;
