import TabButton from "./TabButton";
import {EXAMPLES} from "../data";
import {useState} from "react";

export default function Tabs({ children, buttons, ButtonsContainer = 'menu' }) {
    return (
        <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </>
    );
}