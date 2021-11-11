import styles from "./MessageCard.module.scss"
import {Button, Card, CardActions, CardContent, Slide, Typography} from "@mui/material";
import {getRandomCardColour} from "./colours";
import React, {useState} from "react";

export interface MessageProps {
    author: string,
    message: JSONMessageEntry // an object containing the message per language [EN, JA]
}

export interface JSONMessageEntry {
    EN: string,
    JA: string
}

export default function MessageCard({author, message}: MessageProps) {
    const cardRef = React.useRef(null);
    const [showJA, setShowJA] = useState(false);
    const jaAvailable = message.JA !== "";
    const [colour, setColour] = useState(getRandomCardColour())

    return <Card className={styles.card}
                 ref={cardRef}
                 sx={{background: colour}}>
        <CardContent>
            {<Slide direction="left" in={!showJA}>
                <Typography className={styles.content}>
                    {message.EN}
                </Typography>
            </Slide>
            }
            <Typography className={styles.author}>
                {author}
            </Typography>
        </CardContent>
        <CardActions>
            { jaAvailable && <Button onClick={() => setShowJA(!showJA)}>Toggle Language</Button> }
        </CardActions>
    </Card>;
}
