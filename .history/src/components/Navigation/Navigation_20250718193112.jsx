import { Button } from "../Button/Button";
import "../../index.scss";
import { Box, List, ListItem } from "@mui/material";
import { NavLink } from "react-router";

export const Navigation = () => {
  return (
    <Box sx={{ maxHeight: "400px", overflowY: "auto", p: 2 }}>
      <List sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <ListItem disablePadding>
          <Button component={NavLink} to="/topic/components" fullWidth>
            Components
          </Button>
        </ListItem>
        <ListItem>
          <Button component={NavLink} to="/topic/props" fullWidth>
            Props
          </Button>
        </ListItem>
        <ListItem>
          <Button component={NavLink} to="/topic/state" fullWidth>
            State
          </Button>
        </ListItem>
        <ListItem>
          <Button component={NavLink} to="/topic/lifecycle" fullWidth>
            Lifecycle
          </Button>
        </ListItem>
        <ListItem>
          <Button component={NavLink} to="/topic/events" fullWidth>
            Events
          </Button>
        </ListItem>
        <ListItem>
          <Button component={NavLink} to="/topic/key" fullWidth>
            Key
          </Button>
        </ListItem>
        <ListItem>
          <Button component={NavLink} to="/topic/refs" fullWidth>
            Refs
          </Button>
        </ListItem>
        <ListItem>
          <Button component={NavLink} to="/topic/virtual-dom" fullWidth>
            VirtualDOM
          </Button>
        </ListItem>
        <ListItem>
          <Button component={NavLink} to="/topic/fragment" fullWidth>
            Fragment
          </Button>
        </ListItem>
        <ListItem>
          <Button component={NavLink} to="/topic/react-memo" fullWidth>
            React.Memo
          </Button>
        </ListItem>
        <ListItem>
          <Button component={NavLink} to="/topic/useEffect" fullWidth>
            useEffect
          </Button>
        </ListItem>
        <ListItem>
          <Button component={NavLink} to="/topic/useContext" fullWidth>
            useContext
          </Button>
        </ListItem>
        <ListItem =>
          <Button component={NavLink} to="/topic/useMemo" fullWidth>
            useMemo
          </Button>
        </ListItem>
        <ListItem disablePadding>
          <Button component={NavLink} to="/topic/router" fullWidth>
            Router
          </Button>
        </ListItem>
      </List>
    </Box>
  );
};
