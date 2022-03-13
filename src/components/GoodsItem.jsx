import React from 'react';
import {Card, CardMedia, CardContent, Typography, Grid, CardActions, Button} from "@mui/material";

const GoodsItem = (props) => {
  const {name, price, setOrder, poster} = props;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        height: "100%"
      }}>

        <CardMedia
          component="img"
          height="140"
          image={poster}
          alt={name}
        />

        <CardContent sx={{flexGrow: 1, display: "flex", flexDirection: "column"}}>
          <Typography
            variant="h6"
            component="h3"
            sx={{flexGrow: 1}}
          >
            {name}
          </Typography>
          <Typography
            component="p"
          >
            Цена: {price} руб.
          </Typography>

        </CardContent>

        <CardActions>
          <Button
            variant="outlined"
            onClick={() =>
              setOrder({
                id: props.id,
                name: props.name,
                price: props.price,
              })
            }
          >
            Купить
          </Button>
        </CardActions>

      </Card>
    </Grid>
  );
};

export default GoodsItem;
