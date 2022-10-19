import Type from "./Type";
import classes from "./TypesList.module.css";
const TypesList = (props) => {
  console.log(props.types);
  const typesArr = props.types;
  return (
    <div className={classes.typeContainer}>
      {typesArr.map((el, i) => {
        return <Type key={i} typeName={el.type.name} />;
      })}
    </div>
  );
};
export default TypesList;
