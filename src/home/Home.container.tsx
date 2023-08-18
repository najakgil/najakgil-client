import React from "react";
import BottomNav from "../components/BottomNav";
import HomeUI from "./Home.presenter";


const Home: React.FC = () => {
    return (
        <>
            <HomeUI/>
            <BottomNav type={"home"}/>
        </>
    );
};

export default Home;