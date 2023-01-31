import React from 'react';
import platsData from '../PlatsData'

export default function PlatsShow() {

    const listItems = platsData.map(element => {
        if(element.categorie === 2)
         return <li className='list-li'>
            <img src={element.image} alt="Plats" className='list-img'/>
            <p className='list-para'>{element.name}</p>
            <p className='list-prix'>{element.prix} €</p>

            </li>
    return null;

    }

);


return listItems
}