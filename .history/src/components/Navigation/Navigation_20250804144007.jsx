import { Button } from "../Button/Button";
import "./index.scss";
import { Box, List, ListItem } from "@mui/material";
import { NavLink } from "react-router";
import { ButtonNavigate } from "./ButtonNavigate";
export const Navigation = () => {
  return (
    <Box
      className="list"
      sx={{
        overflowY: "auto",
        p: 2,
        left: 0,
      }}
    >
      <List sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <ListItem disablePadding>
          <ButtonNavigate component={NavLink} to="/topic/components" fullWidth>
            Components
          </ButtonNavigate>
        </ListItem>
        <ListItem disablePadding>
          <ButtonNavigate component={NavLink} to="/topic/props" fullWidth>
            Props
          </ButtonNavigate>
        </ListItem>
        <ListItem disablePadding>
          <ButtonNavigate component={NavLink} to="/topic/state" fullWidth>
            State
          </ButtonNavigate>
        </ListItem>
        <ListItem disablePadding>
          <ButtonNavigate component={NavLink} to="/topic/lifecycle" fullWidth>
            Lifecycle
          </ButtonNavigate>
        </ListItem>
        <ListItem disablePadding>
          <ButtonNavigate component={NavLink} to="/topic/events" fullWidth>
            Events
          </ButtonNavigate>
        </ListItem>
        <ListItem disablePadding>
          <ButtonNavigate component={NavLink} to="/topic/key" fullWidth>
            Key
          </ButtonNavigate>
        </ListItem>
        <ListItem disablePadding>
          <ButtonNavigate component={NavLink} to="/topic/refs" fullWidth>
            Refs
          </ButtonNavigate>
        </ListItem>
        <ListItem disablePadding>
          <ButtonNavigate component={NavLink} to="/topic/virtualdom" fullWidth>
            VirtualDOM
          </ButtonNavigate>
        </ListItem>
        <ListItem disablePadding>
          <ButtonNavigate component={NavLink} to="/topic/fragment" fullWidth>
            Fragment
          </ButtonNavigate>
        </ListItem>
        <ListItem disablePadding>
          <ButtonNavigate component={NavLink} to="/topic/react-memo" fullWidth>
            React.Memo
          </ButtonNavigate>
        </ListItem>
        <ListItem disablePadding>
          <ButtonNavigate component={NavLink} to="/topic/useEffect" fullWidth>
            useEffect
          </ButtonNavigate>
        </ListItem>
        <ListItem disablePadding>
          <ButtonNavigate component={NavLink} to="/topic/useContext" fullWidth>
            useContext
          </ButtonNavigate>
        </ListItem>
        <ListItem disablePadding>
          <ButtonNavigate component={NavLink} to="/topic/useMemo" fullWidth>
            useMemo
          </ButtonNavigate>
        </ListItem>
        <ListItem disablePadding>
          <ButtonNavigate component={NavLink} to="/topic/router" fullWidth>
            Router
          </ButtonNavigate>
        </ListItem>
      </List>
    </Box>
  );
};
