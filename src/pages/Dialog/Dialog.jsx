import React from "react";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import {
  BrowserView,
  MobileView,
  // osName,
  mobileModel,
  // deviceType,
} from "react-device-detect";
import { 
  Button, 
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import DeviceDetector from "../../components/DeviceDetector/DeviceDector";

const DobanDialog = () => {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Navbar />
      <DeviceDetector />
      <BrowserView>
        <h1> 您使用的裝置為桌上型電腦 </h1>
        {/* <h2> 你所使用的作業系統為： {osName}</h2> */}
      </BrowserView>
      <MobileView>
        <h1> 您使用的裝置為行動裝置 </h1>
        {/* <h2> 你所使用的作業系統為： {osName}</h2> */}
        <h2> 你所使用的行動裝置型號為： {mobileModel}</h2>
        {/* <h2> 你所使用的行動裝置類型為： {deviceType}</h2> */}
      </MobileView>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DobanDialog;
