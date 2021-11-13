import type { NextPage } from 'next'
import React from "react";
import ImageBoard from "../../components/artCard/ImageBoard";
import {Grid, Slide} from "@mui/material";
import NextButton from "../../components/Button/NextButton";
import Footer from "../../components/MainElements/Footer";
import art_json from './art.json'
import { JSONArt } from '../../components/artCard/art';
import ImageCard from "../../components/artCard/ImageCard";

const jsonToJsx = (message: JSONArt) => <ImageCard artist={message.artist} image={message.image}/>;

const ArtPage: NextPage = () => {
    const art = art_json.content.map(jsonToJsx);
    return (
        <>
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
                            <img src="MessagePageHeader.svg" alt={"皆のメッセージ"}/>
                        </Slide>
                    </Grid>
                    <Grid item>
                        <ImageBoard messages={art}/>
                    </Grid>
                    <Grid item>
                        <NextButton href={"comissionedArt"}/>
                    </Grid>
                </Grid>
            <Footer/>
        </>
    )
}

export default ArtPage
