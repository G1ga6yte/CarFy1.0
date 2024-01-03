import React from "react";
import {Button, styled, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Typography} from '@mui/material'
import CloseIcon from "@mui/icons-material/Close"
import {useCartContext} from "../../../CartContext";


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


function NavMobileBar (){
  const {dialog, setDialog, handleDialog} = useCartContext()
  
  return(
     <div className="NavMobileBar">
       <BootstrapDialog className="dialog-box"
                        onClose={handleDialog}
          // aria-labelledby="customized-dialog-title"
                        open={dialog}
       >
         <DialogTitle className="dialog-title" sx={{ m: "0 30px 0 0", p: 0 }} id="customized-dialog-title">
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
           <CloseIcon />
         </IconButton>
    
         <DialogContent dividers>
         
         
      
         
    
    
    
         </DialogContent>
         <DialogActions>
         
         </DialogActions>
       </BootstrapDialog>
     </div>
  )
  
}

export default NavMobileBar