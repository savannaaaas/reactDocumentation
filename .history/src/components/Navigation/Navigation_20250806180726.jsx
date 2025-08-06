import "./index.scss";
import { Box, List, ListItem } from "@mui/material";
import { NavLink } from "react-router";
import { ButtonNavigate } from "./ButtonNavigate";
import { routes } from "../../routes/Routes";
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
          <ButtonNavigate
            component={NavLink}
            to={routes.TOPIC.BASE + `/${routes.TOPIC.COMPONENTS}`}
            fullWidth
          >
            Components
          </ButtonNavigate>
        </ListItem>
        <ListItem disablePadding>
          <ButtonNavigate
            component={NavLink}
            to={routes.TOPIC.BASE + `/${routes.TOPIC.PROPS}`}
            fullWidth
          >
            Props
          </ButtonNavigate>
        </ListItem>
        <ListItem disablePadding>
          <ButtonNavigate
            component={NavLink}
            to={routes.TOPIC.BASE + `/${routes.TOPIC.STATE}`}
            fullWidth
          >
            State
          </ButtonNavigate>
        </ListItem>
        <ListItem disablePadding>
          <ButtonNavigate
            component={NavLink}
            to={routes.TOPIC.BASE + `/${routes.TOPIC.LIFECYCLE}`}
            fullWidth
          >
            Lifecycle
          </ButtonNavigate>
        </ListItem>
        <ListItem disablePadding>
          <ButtonNavigate
            component={NavLink}
            to={routes.TOPIC.BASE + `/${routes.TOPIC.EVENTS}`}
            fullWidth
          >
            Events
          </ButtonNavigate>
        </ListItem>
        <ListItem disablePadding>
          <ButtonNavigate
            component={NavLink}
            to={routes.TOPIC.BASE + `/${routes.TOPIC.KEY}`}
            fullWidth
          >
            Key
          </ButtonNavigate>
        </ListItem>
        <ListItem disablePadding>
          <ButtonNavigate
            component={NavLink}
            to={routes.TOPIC.BASE + `/${routes.TOPIC.REFS}`}
            fullWidth
          >
            Refs
          </ButtonNavigate>
        </ListItem>
        <ListItem disablePadding>
          <ButtonNavigate
            component={NavLink}
            to={routes.TOPIC.BASE + `/${routes.TOPIC.VIRTUAL_DOM}`}
            fullWidth
          >
            VirtualDOM
          </ButtonNavigate>
        </ListItem>
        <ListItem disablePadding>
          <ButtonNavigate
            component={NavLink}
            to={routes.TOPIC.BASE + `/${routes.TOPIC.FRAGMENT}`}
            fullWidth
          >
            Fragment
          </ButtonNavigate>
        </ListItem>
        <ListItem disablePadding>
          <ButtonNavigate
            component={NavLink}
            to={routes.TOPIC.BASE + `/${routes.TOPIC.REACT_MEMO}`}
            fullWidth
          >
            React.Memo
          </ButtonNavigate>
        </ListItem>
        <ListItem disablePadding>
          <ButtonNavigate
            component={NavLink}
            to={routes.TOPIC.BASE + `/${routes.TOPIC.USEEFFECT}`}
            fullWidth
          >
            useEffect
          </ButtonNavigate>
        </ListItem>
        <ListItem disablePadding>
          <ButtonNavigate
            component={NavLink}
            to={routes.TOPIC.BASE + `/${routes.TOPIC.USECONTEXT}`}
            fullWidth
          >
            useContext
          </ButtonNavigate>
        </ListItem>
        <ListItem disablePadding>
          <ButtonNavigate
            component={NavLink}
            to={routes.TOPIC.BASE + `/${routes.TOPIC.USEMEMO}`}
            fullWidth
          >
            useMemo
          </ButtonNavigate>
        </ListItem>
        <ListItem disablePadding>
          <ButtonNavigate
            component={NavLink}
            to="/topic/react-router"
            fullWidth
          >
            React Router
          </ButtonNavigate>
        </ListItem>
      </List>
    </Box>
  );
};
