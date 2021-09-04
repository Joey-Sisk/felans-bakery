import React, { useEffect, useState } from "react";
import { Typography, Container, Grid, Button } from "@material-ui/core";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";

export default function Landing(props) {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
        name,
        bio,
        "authorImage": image.asset->url
      }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author)
    return (
      <div className={props.classes.landingContainer}>
        <Container maxWidth="md" gutterBottom>
          <Typography
            className={props.classes.landingTitle}
            variant="h1"
            align="center"
            gutterBottom
          >
            Felans Bakery
          </Typography>
          <Typography
            className={props.classes.landingText}
            variant="h3"
            align="center"
            paragraph
          >
            {/* <BlockContent
              blocks={author.bio}
              projectId="dbi6o2or"
              dataset="production"
            /> */}
            Loading...
          </Typography>
          <div className={props.classes.buttonContainer}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button
                  href="#contactForm"
                  variant="contained"
                  size="large"
                  className={props.classes.buttons}
                  endIcon={<EmailIcon />}
                >
                  Contact Me
                </Button>
              </Grid>
              <Grid item>
                <Button
                  href="https://www.facebook.com/FelansCustomCakes"
                  target="_blank"
                  variant="contained"
                  size="large"
                  className={props.classes.buttons}
                  endIcon={<FacebookIcon />}
                >
                  Facebook
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    );

  return (
    <div className={props.classes.landingContainer}>
      <Container maxWidth="md" gutterBottom>
        <Typography
          className={props.classes.landingTitle}
          variant="h1"
          align="center"
          gutterBottom
        >
          Felans Bakery
        </Typography>
        <Typography
          className={props.classes.landingText}
          variant="h5"
          align="center"
          paragraph
        >
          {/* <BlockContent
            blocks={author.bio}
            projectId="dbi6o2or"
            dataset="production"
            styles=""
          /> */}
          Welcome to my Bakery, please look around at some of my edible art and
          if you like what you see you can reach out to me and I will make a
          custom cake to meet your needs.
        </Typography>
        <div className={props.classes.buttonContainer}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button
                href="#contactForm"
                variant="contained"
                size="large"
                className={props.classes.buttons}
                endIcon={<EmailIcon />}
              >
                Contact Me
              </Button>
            </Grid>
            <Grid item>
              <Button
                href="https://www.facebook.com/FelansCustomCakes"
                target="_blank"
                variant="contained"
                size="large"
                className={props.classes.buttons}
                endIcon={<FacebookIcon />}
              >
                Facebook
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
