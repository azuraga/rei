import type { NextPage } from 'next'
import MessageBoard from "../../components/MessageCard/MessageBoard";
import MessageCard from "../../components/MessageCard/MessageCard";
import NextButton from "../../components/Button/NextButton";
import Footer from "../../components/MainElements/Footer";
import styles from "../../styles/Home.module.scss";
import {Background, Parallax} from "react-parallax";
import React from "react";
import {Grid} from "@mui/material";

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
        <Parallax strength={200}>
            <Background className={styles.background}/>
            <Grid container
                  spacing={5}
                  alignItems="center"
                  justifyContent="center"
                  marginTop="2vh"
            >
                <Grid item>
                    <img src="MessagePageHeader.svg" alt={"皆のメッセージ"}/>
                </Grid>
                <Grid item>
                    <MessageBoard messages={messages}/>
                </Grid>
                <Grid item xs={12}/>
                <Grid item>
                    <NextButton href={"/"}/>
                </Grid>
            </Grid>
            <Footer/>
        </Parallax>
    )
}

export default MessagesPage
