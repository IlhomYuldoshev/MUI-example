import React, {useEffect} from 'react';
import {AppBar, Badge, IconButton, Toolbar, Typography} from "@mui/material";
import {ShoppingBasket} from "@mui/icons-material";

const Header = ({handleOpen, orderCount}) => {
  const [isStatic, setIsStatic] = React.useState(false)

  const listenScrollEvent = () => {
    if (window.scrollY < 73) {
      return setIsStatic(true)
    } else if (window.scrollY > 70) {
      return setIsStatic(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <AppBar position={isStatic ? "static" : "fixed"}>
      <Toolbar>
        <Typography
          variant="h6"
          component="span"
          sx={{flexGrow: 1}}
        >
          MUI shop
        </Typography>

        <IconButton
          color="inherit"
          onClick={handleOpen}
        >
          <Badge
            color="secondary"
            badgeContent={orderCount}
          >
            <ShoppingBasket/>
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
