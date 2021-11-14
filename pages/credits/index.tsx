import type { NextPage } from 'next'
import {Container, Fade, Grid, Typography} from "@mui/material";
import styles from "../../styles/HappyBirthday.module.scss";
import NextButton from "../../components/Button/NextButton";
import {useEffect, useState} from "react";
import React from 'react';
import {Background, Parallax} from "react-parallax";

const Message = () => (
        <Typography variant="body1" align="center">
            Credits
            <br/>
            Product Owner - Sheep
            <br/>
            Lead Developer - Azuraga
            <br/>
            Developer - RedMap
            <br/>
            Developer - short643
            <br/>
            Commissioned artist -  <a href="https://www.twitter.com/coppersketches">@Ninami15</a>
            <br/>
        </Typography>
);


function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export function useWindowDimensions() {
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

const credits: NextPage = () => {
    return (
            <Grid container
                  spacing={5}
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  marginTop="2vh"
            >
                <Grid item>
                    <Fade in={true} timeout={3000}>
                        <div>
                            <img className={styles.logo} src="/logo.png" alt="Tadano Rei Birthday Project"/>
                        </div>
                    </Fade>
                </Grid>

                <Grid item>
                    <Fade in={true} timeout={1500}>
                        <Container maxWidth="md">
                            <Message/>
                        </Container>
                    </Fade>
                </Grid>

                <Grid item>
                    <div className={styles.buttonArea}>
                        <NextButton href="/messages"/>
                    </div>
                </Grid>
            </Grid>
    )

}

export default credits
