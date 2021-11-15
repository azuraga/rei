import React, {useState} from "react";
import Backdrop from '@mui/material/Backdrop';
import {getRandomCardColour} from "../MessageCard/colours";
import styles from "./ImageCard.module.scss";
import {useSpring, animated, config} from "react-spring";

export interface ImageCardProps {
    image: string
}

export default function CommCard({image}: ImageCardProps) {
   
    const [open, setOpen] = React.useState(false);
    const [color, setColor] = useState(getRandomCardColour());

    const animation = useSpring({
        transform: `perspective(600px) rotateY(${open ? 180 : 0}deg)`,
        opacity: open ? 0 : 1,
        config: config.default,
    });

    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    }

    return(
    <>
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 10 }}
            open={open}
            onClick={handleClose}>
            <img alt={"commission"} src={image} className={styles.fullImg} />
        </Backdrop>
        <animated.div onClick={handleToggle} style={animation}>
            <img alt={"commission"} src={image} className={styles.commission} />
        </animated.div>
     </>
    );
}
