import { NavLink } from "react-router-dom";
import { Nav } from "../nav/Nav";
import "./header.scss";
export function Header(props) {
  return (
    <header className="header">
      <NavLink className="header__logo" to="/">
        <h1>LOGO</h1>
      </NavLink>
      <Nav />
    </header>
  );
}
