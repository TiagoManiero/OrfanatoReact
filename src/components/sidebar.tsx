import React from 'react';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/components/sidebar.css';

export default function Sidebar(){
    return(
        <aside>
                <header>
                    <img src={mapMarkerImg} alt="happy"></img>
                    <h2>Escolha um orfanato</h2>
                    <p>Muitas crianças estão te esperando</p>
                </header>
                <footer>
                    <strong>São Paulo</strong>
                    <span>Campinas</span>
                </footer>
            </aside>
    );
}