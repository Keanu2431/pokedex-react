import classes from "./Stats.module.css";
import Stat from "./Stat";
const Stats = () => {
  return (
    <div className={classes.statsContainer}>
      <Stat />
      <Stat />
      <Stat />
      <Stat />
      <Stat />
      <Stat />
    </div>
  );
};
export default Stats;
