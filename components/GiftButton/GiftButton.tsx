import styles from "./GiftButton.module.scss"
import {Button} from "@mui/material";
import {useState} from "react";
import {useRouter} from "next/router";
import {useSpring, animated, config} from "react-spring";

interface NextButtonProps {
    href: string
}

export default function GiftButton({href}: NextButtonProps) {
    const [clicked, setClicked] = useState(false);
    const router = useRouter();

    const goIfClicked = () => {
        if (clicked)
            router.push(href);
    }

    const animate = useSpring({
        rotateZ: clicked ? 500 : 0,
        scale : clicked ? 5 : 1,
        opacity: clicked ? 0 : 1,
        config: config.default,
        onRest: goIfClicked
    });

    return (
        <animated.div style={animate}>
            <Button className={styles.button}
                    onClick={() => setClicked(true)}>
                <img className={styles.image} alt="next"/>
            </Button>
        </animated.div>
    )
}