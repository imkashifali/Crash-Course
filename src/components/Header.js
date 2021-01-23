import PropTypes from "prop-types";
import Button from "./Button.js";
const Header = ({ title, onAdd, showAdd }) => {
  const onClick = () => {
    console.log("Pust ME");
  };
  return (
    <div>
      <h1> {title} </h1>
      <Button
        onClick={onAdd}
        color={showAdd ? "red" : "green"}
        text={showAdd ? "close" : "open"}
      />
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
