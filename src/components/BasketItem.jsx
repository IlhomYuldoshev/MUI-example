import React from "react";
import {IconButton, ListItem, Typography} from "@mui/material";
import {Delete} from "@mui/icons-material";

const BasketItem = ({removeFromOrder, item}) => {
  return (
    <ListItem>
      <Typography
        variant="body1"
      >
        {item.name} {item.price}руб x{item.quantity}
      </Typography>
      <IconButton
        onClick={() => removeFromOrder(item.id)}
        sx={{ml: "auto"}}
      >
        <Delete/>
      </IconButton>
    </ListItem>
  );
};

export default BasketItem;
