import { Link } from "react-router-dom";

function navbar() {
  return (
    <nav>
      <Link to="/Protfolio/">Home</Link>{" | "}
      <Link to="/Protfolio/about">About</Link>{" | "}
      <Link to="/Protfolio/contact">Contact</Link>{" | "}
    </nav>
  );
}

export default navbar;