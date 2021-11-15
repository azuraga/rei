import styles from "../MessageCard/MessageCard.module.scss"
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import React from "react";

export interface ArtBaseProps {
    artist: string,
    image: string
    color: string
}

export function ImageCardBase({artist,image,color}: ArtBaseProps) {
    const cardRef = React.useRef(null);
    return <Card
                 ref={cardRef}
                 sx={{
                     background: color,
                     borderRadius: '31px',
                     maxWidth: '425px'
                 }}
    >
        <CardMedia
            component= "img"
            image={image}
         />  
        <CardContent>
            <Typography sx={{
                maxWidth: 425 / 2,
                fontFamily: 'Jua',
                fontSize: '0.9em',
                lineHeight: '30px',
                color: '#fff',
                textAlign: 'right',
                margin: '1em 2.5em 0 auto'
            }}>
                {artist}
            </Typography>
        </CardContent>
    </Card>
}
