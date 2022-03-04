//package imports
import React from 'react'

//css import
import './css/home.css'

//material ui imports
import { Grid } from '@mui/material'

//image imports
import babyYoda from './css/babyYoda.png'

//import components
import NavBar from './Navbar'


export default function Home() {
  return (
    <div className='homeContainer'>
        <NavBar navFlag='0'></NavBar>
         <Grid container direction="row" justifyContent='center' alignItems='center'  className="grid-con">
            <Grid item xs={6} className='home-text-con'>
                <h2>Hey Welcome to the yoda trading bot</h2>
                <p>
                    This bot Specializes in forex trading, through the Quant-Connect platform
                    which use the LEAN engine to run trading algorithm. Quant-Connect pulls the
                    Forex data from two sources 'FXCM' and 'OANDA', where FXCM database has 31
                    pairs and the OANDA databse has 79 pairs 
                </p>
            </Grid>
            <Grid item xs={5} className='home-img-con'> 
                <img src={babyYoda} width="80%"></img>
            </Grid>
         </Grid>
    </div>
  )
}
