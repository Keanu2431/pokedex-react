import Logo from "../logo/Logo";
import SearchBar from "../searchbar/SearchBar";
import classes from "./Navbar.module.css";
import ReactDOM from "react-dom";
const Navbar = (props) => {
  let type = props.main.types[0].type.name;
  console.log(type);
  const recievedFromSearch = (val) => {
    props.queryPoke(val);
  };
  return ReactDOM.createPortal(
    <div className={classes.container}>
      <nav className={`${classes.navbar} ${classes[type]}`}>
        <Logo />
        <SearchBar fromSearch={recievedFromSearch} />
      </nav>
    </div>,
    document.querySelector("#nav-root")
  );
};
// ReactDOM.createPortal(<Navbar />, document.querySelector("#nav-root"));
export default Navbar;
