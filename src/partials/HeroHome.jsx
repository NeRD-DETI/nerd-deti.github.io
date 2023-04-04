import React, { useState } from 'react';
import Modal from '../utils/Modal';

import HeroImage from '../images/NeRD_LogoCorrected.png';

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Illustration behind hero content */}
        <div
          className="absolute left-0 bottom-0 -ml-20 hidden lg:block pointer-events-none"
          aria-hidden="true"
          data-aos="fade-up"
          data-aos-delay="400"
          style={{opacity : 0.3}} 
        >
          <img src={HeroImage} alt="Hero image" />
        </div>

        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4" data-aos="fade-up">
              Bem vindo ao NeRD
            </h1>
            <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">
              Está página ainda está em construção, mas se a encontraste, bate na porta do NeRD no DETI 
            </p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" href="/projetos">
                  Ver Projetos
                </a>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <a className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">
                  Saber mais
                </a>
              </div>
            </div>
          </div>
            {/* Modal */}
            <Modal id="modal" ariaLabel="modal-headline" show={videoModalOpen} handleClose={() => setVideoModalOpen(false)}>
              <div className="relative pb-9/16">
                <iframe className="absolute w-full h-full" src="https://player.vimeo.com/video/174002812" title="Video" allowFullScreen></iframe>
              </div>
            </Modal>
          </div>
        </div>
    </section>
  );
}

export default HeroHome;
