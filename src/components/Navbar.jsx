import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';

export default function Navbar(props) {
  return (
    <AppBar className={props.classes.navbar} position="relative">
      <Toolbar>
        <Typography variant="h6">Felans Bakery</Typography>
        <FacebookIcon className={props.classes.socials} />
        <InstagramIcon />
        <TwitterIcon />
        <EmailIcon />
      </Toolbar>
    </AppBar>
  );
}
