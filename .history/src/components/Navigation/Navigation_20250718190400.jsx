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
      <NavLink to="/topic/lifecycle">
        <Button>Lifecycle</Button>
      </NavLink>
      <NavLink to="/topic/events">
        <Button>Events</Button>
      </NavLink>
      <NavLink to="/topic/key">
        <Button>Key</Button>
      </NavLink>
      <NavLink to="/topic/refs">
        <Button>Refs</Button>
      </NavLink>
    </nav>
  );
};
