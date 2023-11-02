import { AppBar, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const midLinks = [
  {title: 'catalog', path: '/catalog'},
  {title: 'about', path: '/about'},
  {title: 'contact', path: '/contact'},
]

const rightLinks = [
  {title: 'login', path: '/login'},
  {title: 'register', path: '/register'},
]

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  return (
    <AppBar position="static" sx={{ marginBottom: 4 }}>
      <Toolbar>
        <Typography variant="h6">Re-Store</Typography>
        <Switch
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        <List sx={{ display: 'flex'}}>
          {midLinks.map(({title, path}) => (
            <ListItem
              component={NavLink}
              to={path}
              key={path}
              sx={{color: 'inherit', typography: 'h6'}}
            >
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>
        <List sx={{ display: 'flex'}}>
          {rightLinks.map(({title, path}) => (
            <ListItem
              component={NavLink}
              to={path}
              key={path}
              sx={{color: 'inherit', typography: 'h6'}}
            >
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>
      </Toolbar>
    </AppBar>
  );
}