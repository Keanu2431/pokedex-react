import classes from "./Logo.module.css";
import PokeLogo from "./ReactDex.png";
const Logo = (props) => {
  return (
    <a className={classes.tag} href="/">
      <img className={classes.logo} src={PokeLogo} alt="home" />
    </a>
  );
};
export default Logo;
