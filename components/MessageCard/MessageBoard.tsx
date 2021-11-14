import React from "react";
import Masonry from '@mui/lab/Masonry';
import styles from "./MessageCard.module.scss"
import {config, useTransition, animated} from "react-spring";
import useWindowDimensions from "../../util/WindowDimensions";

export interface MessageBoardProps {
    messages: React.ReactElement[]
}


export default function MessageBoard({messages}: MessageBoardProps) {
    const transitions = useTransition(messages, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        trail: 50,
        config: config.default
    })

    let columnCount;
    const dims = useWindowDimensions();
    if (dims === undefined) {
        columnCount = 1;
    } else {
        const {height, width} = dims;
        columnCount = width < 860 ? 1 : 3;
    }

    return <Masonry columns={columnCount} spacing={3} className={styles.board}>
        {
            transitions((style, element) => {
                return <animated.div style={style}>
                    {element}
                </animated.div>
            })

        }
    </Masonry>
}