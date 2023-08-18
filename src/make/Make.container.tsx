import React from "react";
import MakeUI from "./Make.presenter"
import BottomNav from "../components/BottomNav";

const Make: React.FC = () => {
    return (
        <>
            <MakeUI/>
            <BottomNav type={"make"}/>
        </>
    );
};

export default Make;