import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../store/configureStore";

const midLinks = [
  {title: 'catalog', path: '/catalog'},
  {title: 'about', path: '/about'},
  {title: 'contact', path: '/contact'},
]

const rightLinks = [
  {title: 'login', path: '/login'},
  {title: 'register', path: '/register'},
]

const navStyles = [
  {
                color: 'inherit',
                textDecoration: 'none',
                typography: 'h6',
                '&:hover': {
                  color: 'grey.400'
                },
                '&.active': {
                  color: 'text.secondary'
                }
              }
]

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  const {basket} = useAppSelector(state => state.basket);
  const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <AppBar position="static" sx={{ marginBottom: 4 }}>
      <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Box display='flex' alignItems='center'>
          <Typography variant="h6" component={NavLink} 
        to='/'
        sx={navStyles}
        >Re-Store</Typography>
        <Switch
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        </Box>
        
        <List sx={{ display: 'flex'}}>
          {midLinks.map(({title, path}) => (
            <ListItem
              component={NavLink}
              to={path}
              key={path}
              sx={navStyles}
            >
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>
        
        <Box display='flex' alignItems='center'>
          <IconButton component={Link} to='/basket' size='large' edge='start' color='inherit' sx={{mr: 2}}>
          <Badge badgeContent={itemCount} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <List sx={{ display: 'flex'}}>
          {rightLinks.map(({title, path}) => (
            <ListItem
              component={NavLink}
              to={path}
              key={path}
              sx={navStyles}
            >
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>
        </Box>
        
      </Toolbar>
    </AppBar>
  );
}