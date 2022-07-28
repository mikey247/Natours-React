import classes from "./Announcement.module.css";
import { motion } from "framer-motion";

const Announcement = (props) => {
  return (
    <motion.div
      className={classes.announcement}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", duration: 3, ease: "easeOut" }}
    >
      <p>{props.text}</p>
    </motion.div>
  );
};

export default Announcement;
