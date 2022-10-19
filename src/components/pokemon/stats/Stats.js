import classes from "./Stats.module.css";
import Stat from "./Stat";
const Stats = (props) => {
  const statsArr = props.stats;
  const category = ["HP", "ATK", "DEF", "SP ATK", "SP DEF", "SPD"];
  return (
    <div className={classes.statsContainer}>
      {statsArr.map((el, index) => {
        return (
          <Stat
            baseStat={el.base_stat}
            cat={category[index]}
            key={Math.random()}
          />
        );
      })}
    </div>
  );
};
export default Stats;
