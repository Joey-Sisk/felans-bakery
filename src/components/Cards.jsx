import React, { useEffect, useState } from "react";
import {
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Container,
  // CardActions,
  // Button,
} from "@material-ui/core";
import sanityClient from "../client.js";
import { v4 as uuidv4 } from "uuid";
import BlockContent from "@sanity/block-content-to-react";

export default function Cards(props) {
  const [cardsData, setCardsData] = useState(null);

  const loadingData = [0, 1, 2, 3];

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
          title,
          slug,
          body,
          mainImage{
            asset->{
              _id,
              url
            },
            alt
          },
        }`
      )
      .then((data) => setCardsData(data))
      .catch(console.error);
  }, []);

  if (!cardsData) {
    return (
      <Container className={props.classes.cardGrid} maxWidth="sm">
        <Grid container spacing={4}>
          {loadingData.map((loading) => (
            <Grid item key={uuidv4()} xs={12} sm={6} >
              <Card className={props.classes.card}>
                <CardMedia
                  className={props.classes.cardMedia}
                  image="http://via.placeholder.com/640x360"
                  title="Image Title"
                />
                <CardContent className={props.classes.cardContent}>
                  <Typography varient="h5">Loading...</Typography>
                  <Typography>This content is loading...</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }

  return (
    <Container container className={props.classes.cardGrid} maxWidth="md" justify="center">
      {/* <Button
        size="small"
        color="primary"
        onClick={() => console.log(cardsData)}
      >
        Card Data
      </Button> */}
      <Grid container spacing={4} className={props.classes.cardContainer}>
        {cardsData &&
          cardsData.map((post) => (
            <Grid item key={uuidv4()} xs={12} sm={6}>
              <Card className={props.classes.card}>
                <CardMedia
                  className={props.classes.cardMedia}
                  image={post.mainImage.asset.url}
                  title="Image title"
                />
                <CardContent className={props.classes.cardContent}>
                  <Typography variant="h5">{post.title}</Typography>
                  <BlockContent
                    blocks={post.body}
                    projectId="dbi6o2or"
                    dataset="production"
                  />
                </CardContent>
                {/* <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                </CardActions> */}
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
