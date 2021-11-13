import styles from "./ImageCard.module.scss"
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import React from "react";

export interface ArtBaseProps {
    artist: string,
    image: string
    color: string
}

export function ImageCardBase({artist,image,color}: ArtBaseProps) {
    const cardRef = React.useRef(null);
    return <Card className={styles.card}
                 ref={cardRef}
                 sx={{background: color}}>            
        <CardMedia
            component= "img"
            height="500"
            image={image}
         />  
        <CardContent>
            <Typography className={styles.author}>
                {artist}
            </Typography>
        </CardContent>
    </Card>
}
