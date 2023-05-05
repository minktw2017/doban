import React from "react";
import { useState, useEffect } from "react";
import { 
  Button,
  Dialog,
  Paper,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import "./VideoPlayer.css";

const VideoPlayer = ({ path }) => {

  const [isMobile, setIsMobile] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);
  const [isIPhone, setIsIPhone] = useState(false);

  const [clicked, setClicked] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClicked = () => {
    setClicked(true);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDownload = () => {
    const url = "/files/Empty.apk";
    const link = document.createElement('a');
    link.href = url;
    link.download = "Empty.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    handleClose();
  };

  const handleMacDownload = () => {
    const url = "/files/Empty.ipa";
    const link = document.createElement('a');
    link.href = url;
    link.download = "Empty.ipa";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    handleClose();
  };

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsMobile(/iphone|ipad|ipod|android/.test(userAgent));
  }, []);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsAndroid(userAgent.indexOf("android") > -1);
    setIsIPhone(userAgent.indexOf("iphone") > -1 || userAgent.indexOf("ipad") > -1 || userAgent.indexOf("ipod") > -1);
  }, []);

  return (
    <div className="video-responsive">
      {!clicked && <div className="wrap" onClick={handleClicked}></div>}
      {isMobile ? (
      <Dialog
          open={open}
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
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            不想
          </Button>
          {isAndroid && (
          <div onClick={handleDownload} className="btnDownload">
            下載
          </div>
          )}
          {isIPhone && (
            <div onClick={handleMacDownload} className="btnDownload">
              下載
            </div>
          )}
        </DialogActions>
      </Dialog>
      ) : (
      <Dialog
        open={open}
        onClose={handleClose}
        fullScreen
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Paper style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <DialogTitle id="alert-dialog-title">
            {"本站僅支援手機及平板裝置"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <span>請掃二維碼登入</span>
            </DialogContentText>
            <img src="/img/qr.png" alt="全網最火" />
          </DialogContent>
        </Paper>
      </Dialog>
      )}
      <video controls>
        <source src={path} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;