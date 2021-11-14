import React, {useState} from "react";
import {ImageCardBase} from "./ImageCardBase";
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import {getRandomCardColour} from "../MessageCard/colours";
import styles from "./ImageCard.module.scss";

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
        <Button onClick={handleToggle}>
            <ImageCardBase artist={artist} image={image} color={color}/>
        </Button>
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 10 }}
        open={open}
        onClick={handleClose}
      >
            <img alt={artist} src={image} className={styles.fullImg}/>
       </Backdrop>
     </div>
    );
    // todo: make use of spring physics so state doesn't need to be used.
    // the relative x value of a card based on its contextual location
   // return <ImageCardBase artist={artist} image={image} color={color}/>
}