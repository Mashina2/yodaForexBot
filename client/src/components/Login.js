//package imports
import React,{useRef} from 'react'
import {Link} from 'react-router-dom'

//import css
import './css/login.css'

//material ui imports
import { Button, Grid,TextField} from '@mui/material'
import { alpha, styled } from '@mui/material/styles';

//image imports
import millenium_falcon from './css/millenium_falcon.svg'

//import components
import NavBar from './Navbar'
// style for input
const CssTextField = styled(TextField)({
    'label':{
      color: 'white',
    },
    '& label.Mui-focused': {
      color: 'black',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'green',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'black',
      },
    },
  });

export default function Login() {
    const emailRef = useRef()
  return (
    <div className='mainLoginContainer'>
        <NavBar navFlag='0'></NavBar>
        <Grid container justifyContent='center' alignItems='center' height='100%'>
            <Grid item className='sub-login-con' xs={7}>
                <img src={millenium_falcon} width="20%"></img>
                <span>Login and Begin your journey into</span>
                <span style={{marginBottom:"1.2em"}}>the galaxy of trading</span>
                <span><CssTextField label="E-mail" id="custom-css-outlined-input"  type='email' margin='normal'/></span>
                <span><CssTextField label="Password" id="custom-css-outlined-input" margin='normal' /></span>
                <span>
                    <Link to='/dash'>
                        <Button variant='contained' style={{backgroundColor:"#98a437"}}>Login</Button>
                    </Link>
                </span>
            </Grid>
        </Grid>
    </div>
  )
}
