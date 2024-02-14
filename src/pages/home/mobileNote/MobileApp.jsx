import React from "react";
import {Button, styled, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Typography} from '@mui/material'
import CloseIcon from "@mui/icons-material/Close"
import {useCartContext} from "../../../CartContext";
import "./MobileApp.scss"
import {MobileAppImg} from "./imgSvgMobileApp/MobileAppImg";
import {useTranslation} from "react-i18next";


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


function MobileApp (){
  const {dialog, setDialog, handleDialog} = useCartContext()
  const {t, i18n} = useTranslation()
  
  return(
     <div className="MobileApp">
       
       <BootstrapDialog className="dialog-box"
                        // onClose={handleDialog}
          // aria-labelledby="customized-dialog-title"
                        open={dialog}
       >
         <DialogTitle className="dialog-title" sx={{ m: "0 30px 0 30px", p: 0 }} id="customized-dialog-title">
         </DialogTitle>
         
         <IconButton
            aria-label="close"
            onClick={handleDialog}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[100],
            }}
         >
           {/*<CloseIcon />*/}
           <p className="close">Close</p>
         </IconButton>
    
         <DialogContent className="dialog" dividers>
  
           <div onClick={handleDialog} className="closeBtn">
  
           </div>
           <p className="header">Get the Free App!</p>
           <p className="prg">Get our car service app now for easy booking, real-time tracking, and hassle-free payments. Download today!</p>
  
           <a className="link G-align-center" href="https://play.google.com/store/games?hl=ru&gl=US">
             <img className="img1" src={MobileAppImg.gpIcon} alt=""/>
             <img src={MobileAppImg.gpText} alt=""/>
           </a>
           <a className="link G-align-center" href="https://www.apple.com/store">
             <img className="img1" src={MobileAppImg.apIcon} alt=""/>
             <img src={MobileAppImg.apText} alt=""/>
           </a>
           
         </DialogContent>
         <DialogActions>
         
         </DialogActions>
       </BootstrapDialog>
     </div>
  )
  
}

export default MobileApp