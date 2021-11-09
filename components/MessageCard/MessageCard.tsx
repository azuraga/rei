import styles from "./MessageCard.module.scss"
import {Card, CardContent, Typography} from "@mui/material";
import {getRandomCardColour} from "./colours";
import React from "react";

export interface MessageProps {
    author: string,
    content: string
}

export default function MessageCard({author, content}: MessageProps) {
    return <Card className={styles.card} sx={{background: getRandomCardColour()}}>
            <CardContent>
                <Typography className={styles.content}>
                    {content}
                </Typography>
                <Typography className={styles.author}>
                    {author}
                </Typography>
            </CardContent>
        </Card>;
}
