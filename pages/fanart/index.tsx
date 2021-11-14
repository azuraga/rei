import type { NextPage } from 'next'
import React from "react";
import {easing, Grid, Slide} from "@mui/material";
import Footer from "../../components/MainElements/Footer";
import art_json from './art.json'
import { JSONArt } from '../../components/ImageCard/art';
import ImageCard from "../../components/ImageCard/ImageCard";
import MessageBoard from "../../components/MessageCard/MessageBoard";
import styles from "/styles/Messages.module.scss"
import {NextButtonWithLabel, PreviousButtonWithLabel} from "../../components/Button/PreparedButtons";

const jsonToJsx = (message: JSONArt) => <ImageCard artist={message.artist} image={message.image}/>;

const ArtPage: NextPage = () => {
    const art = art_json.content.map(jsonToJsx);
    return (
        <>
            <NextButtonWithLabel href={"credits"}>credits</NextButtonWithLabel>
            <PreviousButtonWithLabel href={"messages"}>messages</PreviousButtonWithLabel>
            <Slide
                direction="left"
                timeout={2000}
                easing={{ enter: easing.easeInOut, exit: easing.easeInOut}}
                in={true}
                unmountOnExit
                mountOnEnter
            >
                <Grid container
                      spacing={5}
                      alignItems="center"
                      justifyContent="center"
                      marginTop="2vh"
                      direction="column"
                      columns={1}
                >
                    <Grid item>
                        <img src="MessagePageHeader.svg" alt={"皆のメッセージ"} className={styles.header}/>
                    </Grid>
                    <Grid item>
                        <MessageBoard messages={art}/>
                    </Grid>
                </Grid>
            </Slide>


            <Footer/>
        </>
    )
}

export default ArtPage
