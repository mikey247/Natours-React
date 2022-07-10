import classes from "./Announcement.module.css";

const Announcement = (props) => {
  return (
    <div className={classes.announcement}>
      <p>{props.text}</p>
    </div>
  );
};

export default Announcement;
