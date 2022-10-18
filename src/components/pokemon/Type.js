import classes from "./Type.module.css";
const Type = (props) => {
  console.log(props.types[0].type.name);
  return (
    // <div className={classes.typeContainer}>
    <h4 className={classes.type}>{props.types[0].type.name}</h4>
    // </div>
  );
};
export default Type;
