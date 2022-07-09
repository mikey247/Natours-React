//

import classes from "./Navbar.module.css";

const NavBar = () => {
  return (
    <div className={classes.navContainer}>
      <div className={classes.nav}>
        <div className={classes.left}>
          <a href="/">All Tours</a>
        </div>
        <div className={classes.center}>
          <h1>NATOURS.</h1>
        </div>
        <div className={classes.right}>
          <a href="/">Register</a>
          <a href="/">Login</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
