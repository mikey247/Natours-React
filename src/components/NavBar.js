//
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

const NavBar = () => {
  return (
    <motion.div
      className={classes.navContainer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", duration: 3, ease: "easeOut" }}
    >
      <div className={classes.nav}>
        <div className={classes.left}>
          <Link to="/tours-list">Tours</Link>
          <Link to="/">Events</Link>
          <Link to="/">Hotels</Link>
          <Link to="/">Car Rentals</Link>
        </div>
        <div className={classes.center}>
          <Link to="/">
            <h1>NATOURS.</h1>
          </Link>
        </div>
        <div className={classes.right}>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </motion.div>
  );
};

export default NavBar;
