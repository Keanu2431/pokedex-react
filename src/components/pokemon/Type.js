import classes from "./Type.module.css";
const Type = (props) => {
  const pokemon = props.nain;
  let background = "water";
  let type = props.typeName;
  console.log(type);
  if (type === "water") background = type;
  else if (type === "fire") background = type;
  else if (type === "grass") background = type;
  else if (type === "electric") background = type;
  else if (type === "steel") background = type;
  else if (type === "ghost") background = type;
  else if (type === "dragon") background = type;
  else if (type === "dark") background = type;
  else if (type === "rock") background = type;
  else if (type === "psychic") background = type;
  else if (type === "fairy") background = type;
  else if (type === "bug") background = type;
  else if (type === "flying") background = type;
  else if (type === "poison") background = type;
  else if (type === "ground") background = type;
  else if (type === "fighting") background = type;
  else if (type === "ice") background = type;
  else if (type === "normal") background = type;
  return (
    // <div className={classes.typeContainer}>
    <h4 className={`${classes.cont} ${classes[background]}`}>
      {props.typeName}
    </h4>
    // </div>
  );
};
export default Type;
