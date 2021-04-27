import React from 'react';

import '../styles/global.css'
import '../styles/pages/landing.css'

import logoImg from '../images/logo.svg';


function Landing(){
    return(
        <div id="page-landing">
            <div className="content-wrapper">
                <img src={logoImg} alt=""></img>

                <main>
                <h1>Leve felicidade para o mundo</h1>
                <h1>Visite orfanatos e mude a vida das crianças</h1>
                </main>
                
                <div className="location">
                <strong>São Paulo</strong>
                <span>Campinas</span>
                </div>

                <a href="" className="enter-app">
                
                </a>
            </div>
        </div>
    );
}


export default Landing;