import classes from "./Announcement.module.css";
import { motion, useViewportScroll, useSpring } from "framer-motion";

const Announcement = (props) => {
  return (
    <motion.div
      className={classes.announcement}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", duration: 3, ease: "easeOut" }}
    >
      <div className={classes.paragraphDiv}>
        <p className={classes.paragraph}>{props.text}</p>
      </div>
    </motion.div>
  );
};

export const CircleIndicator = () => {
  const { scrollYProgress } = useViewportScroll();
  // const { scrollYProgress } = useElementScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div className={classes.progressBar} style={{ scaleX }} />
    // <motion.path
    //   d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
    //   style={{ pathLength: scrollYProgress }}
    // />
  );
};

export default Announcement;
