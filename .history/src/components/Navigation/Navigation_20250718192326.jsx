import { Button } from "../Button/Button";
import { NavLink } from "react-router";
import "../../index.scss";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Box from "@mui/material/Box";
export const Navigation = () => {
  return (
    <Box sx={{ pb: 7 }} flexDirection="column">
      <List>
        <ListItemButton>
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
            <NavLink to="/topic/virtual-dom">
              <Button>VirtualDOM</Button>
            </NavLink>
            <NavLink to="/topic/fragment">
              <Button>Fragment</Button>
            </NavLink>
            <NavLink to="/topic/virtual-dom">
              <Button>VirtualDOM</Button>
            </NavLink>
            <NavLink to="/topic/react-memo">
              <Button>React.Memo</Button>
            </NavLink>
            <NavLink to="/topic/useEffect">
              <Button>useEffect</Button>
            </NavLink>
            <NavLink to="/topic/virtual-dom">
              <Button>VirtualDOM</Button>
            </NavLink>
            <NavLink to="/topic/useContext">
              <Button>useContext</Button>
            </NavLink>
            <NavLink to="/topic/useMemo">
              <Button>useMemo</Button>
            </NavLink>
            <NavLink to="/topic/router">
              <Button>Router</Button>
            </NavLink>
          </nav>
        </ListItemButton>
      </List>
    </Box>
  );
};
