import PropTypes from "prop-types";
import Button from "./Button.js";
const Header = ({ title }) => {
const onClick = () => {
    console.log("Pust ME")
}
  return (
    <div>
      <h1> {title} </h1>
      <Button onClick={onClick} color="grey" text="Push Me" />
    </div>
  );
};

Header.defaultProps = {
  title: "Lets Talk On Work!!!!!!",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
