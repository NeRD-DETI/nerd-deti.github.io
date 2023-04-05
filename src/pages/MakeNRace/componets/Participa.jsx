import React from 'react';
import { Link } from 'react-router-dom';

function Participa(props) {
    return ( 
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            
            <h1 className="h2 mb-4">Ainda estás a ler isto!? Participa!</h1>
            <Link to="/makenrace/participacao" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">Quero participar</Link>
          </div>
     );
}

export default Participa;