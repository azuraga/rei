import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import React from "react";

export default function Navigation() {
    return  <BottomNavigation
        showLabels
    >
        <BottomNavigationAction label="Start" href="/"/>
        <BottomNavigationAction label="Message to Rei" href="/happy-anniv" />
        <BottomNavigationAction label="Messages" href="/messages"/>
        <BottomNavigationAction label="Fanart" href="/fanart" />
        <BottomNavigationAction label="Credits" href="/credits"/>
    </BottomNavigation>
}