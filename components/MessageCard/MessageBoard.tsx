import React from "react";
import Masonry from '@mui/lab/Masonry';
import styles from "./MessageCard.module.scss"
import {config, useTransition, animated} from "react-spring";
import useWindowDimensions from "../../util/WindowDimensions";

export interface MessageBoardProps {
    messages: React.ReactElement[]
}


export default function MessageBoard({messages}: MessageBoardProps) {
    let columnCount;
    if (typeof window !== 'undefined') {
        const { height, width } = useWindowDimensions();
        columnCount = width < 860 ? 1 : 3;
    } else {
        columnCount = 1;
    }

    const transitions = useTransition(messages, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        trail: 50,
        config: config.default
    })

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