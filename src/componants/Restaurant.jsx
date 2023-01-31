import React, { useContext, useState } from 'react'
import Header from "./Global/Header"
import Footer from "./Global/Footer"
import Plats from './Pages/Plats/Plats'

export default function Restaurant(){

    return(
        <div>
            <Header/>
            <Plats />
            <Footer/>
        </div>
    )
}