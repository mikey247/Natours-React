//
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
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
          <Link to="/">Rentals</Link>
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

      <div className={classes.mobileNav}>
        <div className={classes.logo}>
          <Link to="/">
            <h1>NATOURS.</h1>
          </Link>
        </div>

        <motion.div
          className={classes.hamburger}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 3, ease: "easeOut" }}
        >
          {!toggle ? (
            <GiHamburgerMenu size={"2.5rem"} onClick={handleToggle} />
          ) : (
            <GrClose size={"2.5rem"} onClick={handleToggle} />
          )}
        </motion.div>
      </div>

      {toggle && (
        <motion.div
          className={classes.mobileLinks}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 3, ease: "easeOut" }}
        >
          {/* <ul> */}
          {/* <li> */} <Link to="/tours-list">Tours</Link>
          {/* </li>
          <li> */}
          <Link to="/">Events</Link>
          {/* </li>
          <li> */}
          <Link to="/">Rentals</Link>
          {/* </li>
          <li> */}
          <Link to="/">Hotels</Link>
          {/* </li>
          <li> */}
          <Link to="/register">Register</Link>
          {/* </li>
          <li> */}
          <Link to="/login">Login</Link>
          {/* </li> */}
          {/* </ul> */}
        </motion.div>
      )}
    </motion.div>
  );
};

export default NavBar;
