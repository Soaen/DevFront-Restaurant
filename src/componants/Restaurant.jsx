import React, { useContext, useState } from 'react'
import Header from "./Global/Header"
import Footer from "./Global/Footer"
import Home from "./Pages/Home/Home"
export default function Restaurant(){
return(
    <div>
        <Header/>
        <Home/>
        <Footer/>
    </div>
)   
}