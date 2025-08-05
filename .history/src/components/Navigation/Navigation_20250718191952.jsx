import { Button } from "../Button/Button";
import { NavLink } from "react-router";
import "../../index.scss";
export const Navigation = () => {
  return (
    <List>
      <ListItemButton key={index + person}>
        <ListItemAvatar>
          <Avatar alt="Profile Picture" src={person} />
        </ListItemAvatar>
        <ListItemText primary={primary} secondary={secondary} />
      </ListItemButton>
    </List>
  );
};
