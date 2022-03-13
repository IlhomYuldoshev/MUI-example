import React from 'react';
import {Alert, Snackbar} from "@mui/material";

const Snack = ({isOpen, handleClose = Function.prototype}) => {
  return (
    <Snackbar
      open={isOpen}
      onClose={handleClose}
      autoHideDuration={800}
    >
      <Alert severity="success" onClose={handleClose}>
        Товар успешно добавлен :)
      </Alert>
    </Snackbar>
  );
};

export default Snack;
