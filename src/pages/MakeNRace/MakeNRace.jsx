import React from "react";
import Header from "../../partials/Header";
import FeaturesZigZag from './componets/FeaturesZigzag';
import Participa from "./componets/Participa";
import BannerParticipacao from "./componets/BannerParticipacao";

function MakeNRace() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            {/*  Site header */}
            <Header />
            {/* Conteudo vv */}
            {/*  Page content */}
            <FeaturesZigZag /> 
            <BannerParticipacao />
            <Participa/>
        </div>
    )
}

export default MakeNRace