import type { NextPage } from 'next'
import React from "react";
import {Grid, Slide} from "@mui/material";
import NextButton from "../../components/Button/NextButton";
import Footer from "../../components/MainElements/Footer";
import art_json from './art.json'
import { JSONArt } from '../../components/ImageCard/art';
import ImageCard from "../../components/ImageCard/ImageCard";
import MessageBoard from "../../components/MessageCard/MessageBoard";
import styles from "/styles/Messages.module.scss"

const jsonToJsx = (message: JSONArt) => <ImageCard artist={message.artist} image={message.image}/>;

const ArtPage: NextPage = () => {
    const art = art_json.content.map(jsonToJsx);
    return (
        <>
            <div className={styles.nextButton}>
                <NextButton href={"credits"}/>
            </div>
            <Grid container
                  spacing={5}
                  alignItems="center"
                  justifyContent="center"
                  marginTop="2vh"
                  direction="column"
                  columns={1}
                >
                    <Grid item>
                        <Slide direction="down" in={true}>
                            <img src="MessagePageHeader.svg" alt={"皆のメッセージ"} className={styles.header}/>
                        </Slide>
                    </Grid>
                    <Grid item>
                        <MessageBoard messages={art}/>
                    </Grid>
                </Grid>

            <Footer/>
        </>
    )
}

export default ArtPage
