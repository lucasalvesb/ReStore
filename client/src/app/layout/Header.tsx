import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

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
      </Toolbar>
    </AppBar>
  );
}