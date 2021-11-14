import styles from "./Button.module.scss"
import {easing, Fab, Slide} from "@mui/material";
import {useState} from "react";
import {useRouter} from "next/router";

interface NextButtonProps {
    href: string
    notify?: any
}

export default function NextButton({href, notify}: NextButtonProps) {
    const [clicked, setClicked] = useState(false);
    const router = useRouter();

    const goIfClicked = () => {
        if (clicked) {
            router.push(href);
            if (typeof notify !== 'undefined')
                notify();
        }
    }

    return <Slide direction="up"
                  in={!clicked}
                  timeout={1000}
                  onExited={goIfClicked}
                  easing={{ enter: easing.easeInOut, exit: easing.easeInOut}}
        >
            <Fab className={styles.button}
                 onClick={() => setClicked(true)}>
                <img className={styles.image} alt="next"/>
            </Fab>
        </Slide>
}