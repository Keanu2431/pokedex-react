import classes from "./Evolutions.module.css";

const Wave = () => {
  return (
    <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop
            offset="0%"
            style={{ stopColor: "#4787e9", stopOpacity: "1" }}
          />
          <stop
            offset="100%"
            style={{ stopColor: "#9dbeec", stopOpacity: "1" }}
          />
        </linearGradient>
      </defs>
      <path
        className={classes.svg}
        d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"
        //   style="stroke: none; fill:red;"
      ></path>
    </svg>
  );
};
const Evolutions = (props) => {
  console.log(props);
  return (
    <div className={classes.container}>
      <h1>hello</h1>
    </div>
  );
};
export default Evolutions;
