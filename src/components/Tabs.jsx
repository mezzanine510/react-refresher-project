import TabButton from "./TabButton";
import {EXAMPLES} from "../data";
import {useState} from "react";

export default function Tabs({ children, buttons }) {

    return (
        <>
            <menu>{buttons}</menu>
            {children}
        </>
    );
}