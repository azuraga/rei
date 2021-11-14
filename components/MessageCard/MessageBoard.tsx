import React, {useEffect, useState} from "react";
import Masonry from '@mui/lab/Masonry';
import styles from "./MessageCard.module.scss"
import {config, useTransition, animated} from "react-spring";

export interface MessageBoardProps {
    messages: React.ReactElement[]
}

function getWindowDimensions() {
    const {innerWidth: width, innerHeight: height} = window;
    return {width, height}
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
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