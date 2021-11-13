import type { NextPage } from 'next'
import MessageCard from "../../components/artCard/ArtCard";
import React from "react";
import {JSONMessage} from "../../components/artCard/message";
import MessageBoard from "../../components/artCard/MessageBoard";
import {Grid, Slide} from "@mui/material";
import NextButton from "../../components/Button/NextButton";
import Footer from "../../components/MainElements/Footer";
import message_json from '../messages/rei_messages.json'
import message_friends_json from '../messages/rei_messages_friends.json'
import art_json from './art.json'
import { JSONArt } from '../../components/artCard/art';

const jsonToJsx = (message: JSONArt) => <MessageCard rawMessage={message}/>;


const ArtPage: NextPage = () => {
    const art = art_json.Content.map(jsonToJsx)
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
                        <MessageBoard messages={art}/>
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
