import { AppBar, Switch, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
          defaultChecked={darkMode}
          color="default"
          onChange={toggleDarkMode}
        />
      </Toolbar>
    </AppBar>
  );
}