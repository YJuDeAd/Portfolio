import { Link } from "react-router-dom";

function navbar() {
  return (
    <nav>
      <Link to="/Portfolio/">Home</Link>{" | "}
      <Link to="/Portfolio/about">About</Link>{" | "}
      <Link to="/Portfolio/contact">Contact</Link>
    </nav>
  );
}

export default navbar;