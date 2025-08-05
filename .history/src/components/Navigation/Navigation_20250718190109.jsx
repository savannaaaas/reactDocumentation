import { Button } from "../Button/Button";
import { NavLink } from "react-router";

export const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLink to="/topic/components">
        <Button>Components</Button>
      </NavLink>
      <NavLink to="/topic/props">
        <Button>Props</Button>
      </NavLink>
      <NavLink to="/topic/state">
        <Button>State</Button>
      </NavLink>
      <NavLink to="/topic/LifeCycle">
        {" "}
        <Button>LifeCycle</Button>
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
    </nav>
  );
};
