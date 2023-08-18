import React from "react";
import BottomNav from "../components/BottomNav";
import PreviewUI from "./Preview.presenter";

const Preview: React.FC = () => {
    return (
        <>
            <PreviewUI/>
            <BottomNav type={"make"}/>
        </>
    );
};

export default Preview;