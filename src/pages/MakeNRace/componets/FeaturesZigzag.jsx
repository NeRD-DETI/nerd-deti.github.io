import React from 'react';

import CarImage from '../../../images/Racewars/1.jpg';
import TrackImage from '../../../images/Racewars/2.jpg';
import FeatImage02 from '../../../images/features-03-image-02.png';
import FeatImage03 from '../../../images/features-03-image-03.png';

function FeaturesZigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            
            <h1 className="h2 mb-4">Make n' Race</h1>
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Inscrições Abertas</div>
            <p className="text-xl text-gray-400">O Make n' Race é o nome desafio criado pelo NeRD, participa numa competição epica de corrida!<br></br>
                        (....Imagina é tipo mario kart mas na vida real)</p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={CarImage} width="540" height="405" alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                <div className="font-architects-daughter text-xl text-purple-600 mb-2">Carro</div>
                  <h3 className="h3 mb-3">Cria o teu proprio carro</h3>
                  <p className="text-xl text-gray-400 mb-4">Cria o teu próprio carro para competires no desafio!</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      - Duis aute irure dolor in reprehenderit
                    </li>
                    <li className="flex items-center mb-2">
                      - Excepteur sint occaecat
                    </li>
                    <li className="flex items-center">
                      - Amet consectetur adipiscing elit
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={TrackImage} width="540" height="405" alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Pista</div>
                  <h3 className="h3 mb-3">Compete com o teu carro numa pista real</h3>
                  <p className="text-xl text-gray-400 mb-4"></p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      - Conduz o teu carro numa pista real
                    </li>
                    <li className="flex items-center mb-2">
                      - Escapa a traps e supresas controladas em tempo real
                    </li>
                    <li className="flex items-center">
                      - ....
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesZigzag;