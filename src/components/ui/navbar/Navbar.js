import Logo from "../logo/Logo";
import SearchBar from "../searchbar/SearchBar";
import classes from "./Navbar.module.css";
const Navbar = (props) => {
  return (
    <nav className={classes.navbar}>
      <Logo /> <SearchBar />
    </nav>
  );
};
export default Navbar;
