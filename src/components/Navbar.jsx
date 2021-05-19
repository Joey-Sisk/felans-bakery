import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default function Navbar() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6">Felans Bakery</Typography>
      </Toolbar>
    </AppBar>
  );
}
