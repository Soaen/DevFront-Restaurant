import React from 'react';
import platsData from '../../Plats/PlatsData'

export default function SoftShow() {

    const listItems = platsData.map(element => {
        if(element.categorie === 4)
         return <li className='list-li'>
            <img src={element.image} alt="Soft" className='list-img'/>
            <p className='list-para'>{element.name}</p>
            <p className='list-prix'>{element.prix} €</p>
            </li>
    return null;

    }

);


return listItems
}