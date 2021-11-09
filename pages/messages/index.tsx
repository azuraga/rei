import type { NextPage } from 'next'
import Head from 'next/head'
import MessageBoard from "../../components/MessageCard/MessageBoard";
import MessageCard from "../../components/MessageCard/MessageCard";
import NextButton from "../../components/Button/NextButton";
import Footer from "../../components/MainElements/Footer";
import styles from "../../styles/Home.module.scss";
import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import BackgroundParallaxLayer from "../../components/MainElements/BackgroundParallaxLayer";
import {Slide} from "@mui/material";

const MessagesPage: NextPage = () => {
    const messages = [<MessageCard author="The mouse of the evening watches" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>,
    <MessageCard author="mouse" content="お誕生日おめでとう！！！"/>,
    <MessageCard author="mouse" content="お誕生日おめでとう！！！"/>,
    <MessageCard author="mouse" content="お誕生日おめでとう！！！"/>,
    <MessageCard author="mouse" content="お誕生日おめでとう！！！"/>,
    <MessageCard author="mouse" content="お誕生日おめでとう！！！"/>,
    <MessageCard author="mouse" content="お誕生日おめでとう！！！"/>,
    <MessageCard author="mouse" content="お誕生日おめでとう！！！"/>,
    <MessageCard author="mouse" content="お誕生日おめでとう！！！"/>,
    <MessageCard author="mouse" content="お誕生日おめでとう！！！"/>]

    return (
        <Parallax pages={4}>
            <ParallaxLayer speed={-0.1} factor={200} className={styles.background}/>

            <ParallaxLayer offset={0.05} speed={0.3}>
                <img src="MessagePageHeader.svg" alt={"皆のメッセージ"}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.1} speed={0.2} className={styles.main}>
                <MessageBoard messages={messages}/>
            </ParallaxLayer>

            <ParallaxLayer speed={0.3} offset={0.5} className={styles.main}>
                <NextButton href={"/"}/>
            </ParallaxLayer>
            <ParallaxLayer offset={3.5} speed={0.2}>
                <Footer/>
            </ParallaxLayer>
        </Parallax>

    )
}

export default MessagesPage
