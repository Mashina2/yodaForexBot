//package imports
import * as React from 'react';
import {Link} from 'react-router-dom'

//material ui imports
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Grid } from '@mui/material';

//css import
import './css/navbar.css'

//image import
import darth_vader from './css/darth_vader.svg'

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function NavBar(props) {
    if(props.navFlag === '0'){
        return (
            <React.Fragment>
              <CssBaseline />
              <ElevationScroll {...props}>
                <AppBar>
                  <Toolbar className='nav-bar'>
                    <Grid container direction={'row'} alignItems="center" className='navbar-grid'>
                        <Grid item item xs={6.5}>
                            <Typography variant="h6" component="div">
                                <span className='navbar-heading'>Yoda Trading Bot</span>
                            </Typography>
                        </Grid>
                        <Grid item xs={1.5}>
                            <Link to='/' className='nav-links'>
                                <span className='navbar-btn'>Home</span>
                            </Link>
                        </Grid>
                        <Grid item xs={2}>
                                <span className='navbar-btn'>About us</span>
                        </Grid>
                        <Grid item xs={1.5}>
                            <Link to='/login' className='nav-links'>
                                <span className='navbar-btn'>Login</span>
                            </Link>
                        </Grid>
                    </Grid>
                    
                  </Toolbar>
                </AppBar>
              </ElevationScroll>
              <Toolbar />
            </React.Fragment>
          );
    }else if(props.navFlag === '1'){
        return (
            <React.Fragment>
              <CssBaseline />
              <ElevationScroll {...props}>
                <AppBar>
                  <Toolbar className='nav-bar'>
                    <Grid container direction={'row'} alignItems="center" className='navbar-grid'>
                        <Grid item item xs={6.5}>
                            <Typography variant="h6" component="div">
                                <span className='navbar-heading'>Yoda Trading Bot</span>
                            </Typography>
                        </Grid>
                        <Grid item xs={5}>
                            <Link to='/'>
                                <img src={darth_vader} width="10%" style={{float:'right'}}></img>
                            </Link>
                        </Grid>
                    </Grid>
                    
                  </Toolbar>
                </AppBar>
              </ElevationScroll>
              <Toolbar />
            </React.Fragment>
          );
    }
    
}   