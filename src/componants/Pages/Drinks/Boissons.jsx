import React from 'react';
import './style/drinks.css'
import SoftShow from './types/SoftShow';
import AlcoolShow from './types/AlcoolShow';
import Header from '../../Global/Header';
import Footer from '../../Global/Footer';

export default function Drinks() {
    return (
        <div>
        <Header/>
        <div className='list-plat-container'>
            <li className='li-plat'>
                <h2 className='h2-plat'>Soft</h2>

                <SoftShow />
            </li>
            <hr size="100%" />
            <li className='li-plat'>
                <h2 className='h2-plat'>Alcool</h2>
                <AlcoolShow />
            </li>
            
        </div>
        <Footer />
        </div>
    );
}