import React from "react";
import styles from "./MessageCard.module.scss"
import Masonry from '@mui/lab/Masonry';
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
    let boardWidth;
    const dims = useWindowDimensions();
    if (dims === undefined) {
        columnCount = 1;
    } else {
        const {height, width} = dims;
        columnCount = width < 860 ? 1 : 3;
        boardWidth = width < 860 ? '100vw' : '75vw';
    }

    return <Masonry columns={columnCount} spacing={3}
                    sx={{
                        maxWidth: '1300px',
                        width: boardWidth
                    }}
    >
        {
            transitions((style, element) => {
                return <animated.div style={style}>
                    {element}
                </animated.div>
            })

        }
    </Masonry>
}