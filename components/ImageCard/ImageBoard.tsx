import React from "react";
import Masonry from '@mui/lab/Masonry';
import styles from "./ImageCard.module.scss"
import {config, useTransition, animated} from "react-spring";

export interface MessageBoardProps {
    messages: React.ReactElement[]
}

export default function ImageBoard({messages}: MessageBoardProps) {
    const transitions = useTransition(messages, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        trail: 50,
        config: config.default
    })

    return <Masonry columns={3} spacing={3} className={styles.board}>
        {
            transitions((style, element) => {
                return <animated.div style={style}>
                    {element}
                </animated.div>
            })

        }
    </Masonry>
}