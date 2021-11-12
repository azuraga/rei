import styles from "./MessageCard.module.scss"
import {Button, Card, CardActions, CardContent, Slide, Typography, useMediaQuery} from "@mui/material";
import {getRandomCardColour} from "./colours";
import React, {useState} from "react";
import {useSpring, animated, config, Transition} from 'react-spring'
import ReactCardFlip from "react-card-flip";


export interface MessageProps {
    author: string,
    message: string // an object containing the message per language [EN, JA]
}

export interface MultiLanguageMessageProps {
    author: string,
    message: JSONMessageEntry // an object containing the message per language [EN, JA]
}

export interface JSONMessageEntry {
    EN: string,
    JA: string
}


export function MultiLanguageMessageCard({author, message}: MultiLanguageMessageProps) {
    const [showEN, setShowEN] = useState(true);
    return (
        <div onClick={() => setShowEN(!showEN)}>
            <ReactCardFlip
                isFlipped={showEN}
                flipDirection="horizontal"
                flipSpeedBackToFront={0.6}
                flipSpeedFrontToBack={0.6}
            >
                <MessageCard author={author} message={message.JA}/>
                <MessageCard author={author} message={message.EN}/>
            </ReactCardFlip>
        </div>
    );
}


export default function MessageCard({author, message}: MessageProps) {
    const cardRef = React.useRef(null);
    const [colour, setColour] = useState(getRandomCardColour());

    return <Card className={styles.card}
                 ref={cardRef}
                 sx={{background: colour}}>
        <CardContent>
            <Typography className={styles.content}>
                {message}
            </Typography>
            <Typography className={styles.author}>
                {author}
            </Typography>
        </CardContent>
    </Card>
}
