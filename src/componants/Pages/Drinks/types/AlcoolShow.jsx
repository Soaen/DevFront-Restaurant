import React from 'react';
import platsData from '../../Plats/PlatsData'

export default function AlcoolShow() {

    const listItems = platsData.map(element => {
        if(element.categorie === 5)
         return <li className='list-li'>
            <img src={element.image} alt="Alcool" className='list-img'/>
            <p className='list-para'>{element.name}</p>
            <p className='list-prix'>{element.prix} €</p>
            </li>
    return null;

    }

);


return listItems
}