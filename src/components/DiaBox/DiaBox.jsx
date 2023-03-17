import React from "react";
import { useState } from "react";
import { 
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import ButtonDW from "../ButtonDW/ButtonDW.jsx";

const DiaBox = (isOpen) => {

  const [openDialog, setOpenDialog] = useState(isOpen);

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <>
      {openDialog && (
        <Dialog
          open={openDialog}
          onClose={handleClose}
          fullWidth
          maxWidth="lg"
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"全網最優惠"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              下載全網最火手機軟件
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              不想
            </Button>
            {/* <Button onClick={handleClose} color="primary" autoFocus>
              下載
            </Button> */}
            <ButtonDW />
          </DialogActions>
        </Dialog>
      )}
    </>
  )
};

export default DiaBox;