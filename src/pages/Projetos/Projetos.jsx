import React from "react";
import Header from "../../partials/Header";
import WorkshopBlocks from "../../partials/FeaturesBlock/WorkshopsBlocks";
import PalestrasBlocks from "../../partials/FeaturesBlock/PalestrasBlocks";
function Projetos() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            {/*  Site header */}
            <Header />
            {/* Conteudo vv */}
            {/* Hero content */}

            <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
                {/* Section header */}
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="h1" data-aos="fade-up">
                        Workshops
                        
                    </h1>
                    <p className="text-xl text-gray-400" data-aos="fade-up">
                        ---
                    </p>
                </div>
            </div>
            <WorkshopBlocks/>
            <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
                {/* Section header */}
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="h1 mb-4" data-aos="fade-up">
                        Palestras
                    </h1>
                    <p className="text-xl text-gray-400 mb-8" data-aos="fade-up">
                        ---
                    </p>
                    
                </div>
            </div>
            <PalestrasBlocks/>
            <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
                {/* Section header */}
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="h1 mb-4" data-aos="fade-up">
                        Criações
                    </h1>
                    <p className="text-xl text-gray-400 mb-8" data-aos="fade-up">
                        ---
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Projetos