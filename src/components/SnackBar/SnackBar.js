import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import React from "react";

function SnackBarComponent({
  vertical,
  horizontal,
  opensnack,
  handleClose,
  severity,
  message,
  autoHideDuration,
}) {
  return (
    <Snackbar
      autoHideDuration={autoHideDuration}
      anchorOrigin={{ vertical, horizontal }}
      open={opensnack}
      onClose={handleClose}
      key={vertical + horizontal}
    >
      <Alert severity={severity}>{message}</Alert>
    </Snackbar>
  );
}

export default SnackBarComponent;
