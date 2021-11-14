import React, {useState} from "react";
import {getRandomCardColour} from "./colours";
import {ImageCardBase} from "./ImageCardBase";
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
export interface ImageCardProps {
    artist: string,
    image: string
}

export default function ImageCard({artist,image}: ImageCardProps) {
   
    const  [open, setOpen] = React.useState(false);
    const [color, setColor] = useState(getRandomCardColour());

    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    }
    return(
    <div>
        <Button onClick={handleToggle}><ImageCardBase artist={artist} image={image} color={color}/></Button>
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
       <img alt = "test" src={image} height="70%" width="auto"/>

       </Backdrop>
     </div>
    );
    // todo: make use of spring physics so state doesn't need to be used.
    // the relative x value of a card based on its contextual location
   // return <ImageCardBase artist={artist} image={image} color={color}/>
}