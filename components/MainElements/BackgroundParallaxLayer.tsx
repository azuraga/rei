import {ParallaxLayer} from "@react-spring/parallax";
import styles from "../../styles/Home.module.scss";

export default function BackgroundParallaxLayer() {
    return <ParallaxLayer speed={0.1} factor={3} className={styles.background}/>

}