//
import classes from "./Footer.module.css";
import {
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsPinterest,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className={classes.footerContainer}>
        <div className={classes.left}>
          <h1>NATOURS.</h1>
          <p>THE MOST AMAZING LOCATIONS FOR THE BEST PRICES.✌🏾</p>

          <div className={classes.socials}>
            <div color="E4405F">
              <BsInstagram size={"1.5rem"} />
            </div>

            <div color="3B5999">
              <BsFacebook size={"1.5rem"} />
            </div>

            <div color="55ACEE">
              <BsTwitter size={"1.5rem"} />
            </div>

            <div color="E60023">
              <BsPinterest size={"1.5rem"} />
            </div>
          </div>
        </div>
        <div className={classes.center}>
          <h3>LINKS</h3>
          <div className={classes.links}>
            <a href="/">Home</a>
            <a href="/">Tours</a>
            <a href="/">Bookings</a>
            <a href="/">Hotels</a>
            <a href="/">Rentals</a>
          </div>
        </div>
        <div className={classes.right}>
          <h3>CONTACT</h3>
          <div className={classes.contacts}>
            <div>
              <BiMap />
              1/3 lorem ipsum dolor,lore
            </div>
            <div>
              <AiOutlineMail />
              michaeljunior794@gmail.com
            </div>
            <div>
              <BsFillTelephoneFill />
              +1 234 56 789 0
            </div>
          </div>
        </div>
      </div>
      <div className={classes.signature}>
        <p>Made with 💙 by mikey👨🏾‍💻.</p>
      </div>
    </footer>
  );
};

export default Footer;
