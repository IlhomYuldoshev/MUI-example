import React from 'react';
import {Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {ShoppingBasket} from "@mui/icons-material";
import BasketItem from "./BasketItem";

const Basket = (props) => {
  const {
    isCartOpen,
    closeCart = Function.prototype,
    order = [],
    removeFromOrder
  } = props

  return (
    <Drawer
      anchor="right"
      open={isCartOpen}
      onClose={closeCart}
    >
      <List sx={{
        width: 400,
        display: "flex",
        flexDirection: "column",
        height: "100%"
      }}>
        <ListItem>
          <ListItemIcon>
            <ShoppingBasket/>
          </ListItemIcon>
          <ListItemText primary="Корзина"/>
        </ListItem>

        <Divider/>
        {order.length
          ? order.map(item => {
            return (
              <BasketItem item={item} removeFromOrder={removeFromOrder}/>
            )
          })
          : <ListItem>
            Товаров нет
          </ListItem>
        }

        <Divider sx={{mt: "auto"}}/>
        <ListItem>
          <Typography variant="body1" sx={{fontWeight: 700}}>
            Общая стоимость:{' '}
            {order.reduce((acc, item) => {
              return acc + item.price * item.quantity;
            }, 0)}{' '}
            рублей.
          </Typography>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Basket;
