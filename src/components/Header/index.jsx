import { NavLink } from "react-router-dom";
import NavLinkByRuslan from "../NavLinkByRuslan";
import Users from "../Users";
function Header() {
  return (
    <nav className="homeAboutContact">
      <NavLinkByRuslan title="home" to="/" />
      <NavLinkByRuslan title="about" to="/about" />
      <NavLinkByRuslan title="contact" to="/contact" />
    </nav>
  );
}

export default Header;