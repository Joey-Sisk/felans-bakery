import React, { useEffect, useState } from "react";
import {
  Typography,
  Grid,
  Card,
  CardActions,
  CardMedia,
  Button,
  CardContent,
  Container,
} from "@material-ui/core";
import sanityClient from "../client";

export default function Cards(props) {
  const [cardsData, setCardsData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
            },
            alt
          },
          body
        }`
      )
      .then((data) => setCardsData(data))
      .catch(console.error);
  }, []);

  if (!cardsData) {
    return <div>Loading...</div>;
  }

  return (
    <Container className={props.classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {cardsData &&
          cardsData.map((card) => (
            <Grid item key={props.card} xs={12} sm={6} md={4}>
              <Card className={props.classes.card}>
                <CardMedia
                  className={props.classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent className={props.classes.cardContent}>
                  <Typography gutterCottom cariant="h5">
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card, you can use this section to describe
                    the content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
