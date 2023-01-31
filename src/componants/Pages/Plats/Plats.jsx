import React from 'react';
import './style/plats.css'
import Entrees from './types/EntreesShow';
import PlatsShow from './types/PlatsShow';
import DessertsShow from './types/DessertsShow';

export default function Plats() {
    return (
        <div className='list-plat-container'>
            <li className='li-plat'>
                <h2 className='h2-plat'>Entrées</h2>

                <Entrees />
            </li>

            <li className='li-plat'>
                <h2 className='h2-plat'>Plats</h2>
                <PlatsShow />
            </li>
            

            <li className='li-plat'>
                <h2 className='h2-plat'>Desserts</h2>
                <DessertsShow />
            </li>
        </div>
    );
}