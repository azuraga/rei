import styles from "./MessageCard.module.scss"
import {Card, CardContent, Typography} from "@mui/material";
import {getRandomCardColour} from "./colours";

export interface MessageProps {
    author: string,
    content: string
}

export default function MessageCard({author, content}: MessageProps) {
    return (
        <Card className={styles.card} sx={{background: getRandomCardColour()}}>
            <CardContent>
                <Typography className={styles.content}>
                    {content}
                </Typography>

                <div className={styles.authorSection}>
                    <Typography className={styles.author}>
                        {author}
                    </Typography>
                </div>
            </CardContent>
        </Card>
    );
}
