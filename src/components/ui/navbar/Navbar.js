import Logo from "../logo/Logo";
import SearchBar from "../searchbar/SearchBar";
import classes from "./Navbar.module.css";
const Navbar = (props) => {
  return (
    <div className={classes.container}>
      <nav className={classes.navbar}>
        <Logo />
        <SearchBar />
      </nav>
    </div>
  );
};
export default Navbar;
