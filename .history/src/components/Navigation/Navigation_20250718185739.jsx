import Button from "@mui/material/Button";
import { NavLink } from "react-router";

export const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLink to="/topic/components">Components</NavLink>
      <NavLink to="/topic/props">
        <Button>Props</Button>
      </NavLink>
      <NavLink></NavLink>
      <NavLink></NavLink>
      <NavLink></NavLink>
      <NavLink></NavLink>
      <NavLink></NavLink>
      <NavLink></NavLink>
      <NavLink></NavLink>
      <NavLink></NavLink>
      <NavLink></NavLink>
      <NavLink></NavLink>
      <NavLink></NavLink>
      <NavLink></NavLink>
      <NavLink></NavLink>
      <NavLink></NavLink>
    </nav>
  );
};
