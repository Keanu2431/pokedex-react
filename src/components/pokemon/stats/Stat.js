import classes from "./Stat.module.css";
const Stat = (props) => {
  return (
    <div className={classes.stat}>
      <div className={classes.statBar}>
        <div className={classes.innerStatBar}></div>
      </div>
      <h4>atk 100</h4>
    </div>
  );
};
export default Stat;
