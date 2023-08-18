import React from "react";
import BottomNav from "../components/BottomNav";
import MyPageUI from "./Mypage.presenter";


const Mypage: React.FC = () => {
    return (
        <>
            <MyPageUI/>
            <BottomNav type={"mypage"}/>
        </>
    );
};

export default Mypage;