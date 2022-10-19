import classes from "./Stat.module.css";
const Stat = (props) => {
  return (
    <div className={classes.stat}>
      <div className={classes.statBar}>
        <div
          className={classes.innerStatBar}
          style={{
            width: `${
              Number(props.baseStat) > 180
                ? "90"
                : (Number(props.baseStat) / 180) * 100
            }%`,
          }}
        ></div>
      </div>
      <h4>{`${props.cat} ${props.baseStat}`}</h4>
    </div>
  );
};
export default Stat;
