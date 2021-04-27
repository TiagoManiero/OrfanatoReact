import React, { useEffect,useState } from 'react';

import '../styles/pages/orphanages-map.css'

import {  Map, Tilelayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import Sidebar from '../components/sidebar';
import api from '../services/api';

interface Orphanage{
    latitude: number;
}

function OrphanagesMap(){
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
    //hooks - funções para carregamentos, no caso do useeffect ele diz o que executar e o tempo de repetições
    useEffect(()=>{
        api.get('orphanages').then(response =>{
            setOrphanages(response.data);
            
        });
    },[]);

    return (
        <div id="page-map">
            <Sidebar />

            <Map
                center={{-22.8924342,-47.0678946}}
                zoom={11}
                style={{  width: 100, height: 100 }}
            >
                <Tilelayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </Map>

            {orphanages.map(orphanage =>{
                return (
                    {orphanage.latitude}
                );
            })}


        </div>
    );
}


export default OrphanagesMap;