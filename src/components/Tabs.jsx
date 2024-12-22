import TabButton from "./TabButton";
import {EXAMPLES} from "../data";
import {useState} from "react";

export default function Tabs({ children, buttons, buttonsContainer }) {
    const ButtonContainer = buttonsContainer || 'menu';

    return (
        <>
            <ButtonContainer>{buttons}</ButtonContainer>
            {children}
        </>
    );
}