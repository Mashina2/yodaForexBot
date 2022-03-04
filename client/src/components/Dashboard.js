//package import
import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../lotties/89251-graphs.json'
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
//import components
import NavBar from './Navbar'

//import material ui 
import { 
        FormControlLabel,
        Grid, 
        Paper,
        Switch,
        TextField,
        MenuItem, 
        FormHelperText,
        FormLabel,
        InputLabel,
        InputAdornment,
        OutlinedInput,
        Divider,
        Chip,
        Box,
        ToggleButtonGroup,
        ToggleButton,
        FormatAlignRightIcon,

      } 
from '@mui/material'
import { alpha, styled } from '@mui/material/styles';

//import css
import './css/dashboard.css'
import { fontFamily } from '@mui/system';
//ohanda forex pairs
let pairsOhanda = [ 'o','AUDCAD','AUDUSD','CHFJPY','EURDKK','EURNZD','EURZAR','GBPNZD',
                    'NZDCAD','SGDCHF','USDCNH','USDJPY','USDSGD','AUDCHF','CADCHF',
                    'CHFZAR','EURGBP','EURPLN','GBPAUD','GBPPLN','NZDCHF','SGDHKD',
                    'USDCZK','USDMXN','USDTHB','AUDHKD','CADHKD','EURAUD','EURHKD',
                    'EURSEK','GBPCAD','GBPSGD','NZDHKD','SGDJPY','USDDKK','USDNOK',
                    'USDTRY','AUDJPY','CADJPY','EURCAD','EURHUF','EURSGD','GBPCHF',
                    'GBPUSD','NZDJPY','TRYJPY','USDHKD','USDPLN','USDZAR','AUDNZD',
                    'CADSGD','EURCHF','EURJPY','EURTRY','GBPHKD','GBPZAR','NZDSGD',
                    'USDCAD','USDHUF','USDSAR','ZARJPY','AUDSGD','CHFHKD','EURCZK',
                    'EURNOK','EURUSD','GBPJPY','HKDJPY','NZDUSD','USDCHF','USDINR',
                    'USDSEK']

//FXCM pairs
let pairsFXCM = [   'f','AUDCAD','AUDCHF','AUDJPY','AUDNZD','AUDUSD','CADCHF','CADJPY',
                    'CHFJPY','EURAUD','EURCAD','EURCHF','EURGBP','EURJPY','EURNOK',
                    'EURNZD','EURSEK','EURTRY','EURUSD','GBPAUD','GBPCAD','GBPCHF',
                    'GBPJPY','GBPNZD','GBPUSD','NZDCAD','NZDCHF','NZDJPY','NZDUSD',
                    'TRYJPY','USDMXN','USDCAD','USDCHF','USDCNY','USDHKD','USDJPY',
                    'USDNOK','USDSEK','USDTRY','USDZAR','ZARJPY'
                ]

  
export default function Dashboard () {
    const [investedAmount, setInvestedAmount] = React.useState('000');
    const [numberFlag,setNumberFlag] = React.useState(false)
    const [alignment, setAlignment] = React.useState('left');
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
         preserveAspectRatio: "xMidYMid slice"
        }
      };
    // style for input
const MarketTextField = styled((props) => (
    <TextField  margin="normal" {...props}/>
  ))(({ theme }) => ({
    'label':{
        color:"white"
    },
    '& .MuiFilledInput-root': {
      color:"white",
      border: '1px solid #e2e2e1',
      overflow: 'hidden',
      borderRadius: 4,
      backgroundColor:'#05061a',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      '&:hover': {
        backgroundColor: 'transparent',
      },
      '&.Mui-focused': {
        backgroundColor: '#132559',
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));
  const AMTTextField = styled(TextField)({
  'label':{
      color:'white'
  },   
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiOutlinedInput-root': {
      color:"white",
    '& fieldset': {
      borderColor: 'white',
      
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
      color:'white',
    },
  },
});
    const [formTypeCheck, setFormTypeCheck] = React.useState(true);
    const [market, setMarket] = React.useState('OANDA');
    const [pairs, setPairs] = React.useState('AUDCAD');

    const handleAlignment = (event, newAlignment) => {
        if (newAlignment !== null) {
          setAlignment(newAlignment);
        }
      };
    const handleFormTypeChange = (event) => {
        setFormTypeCheck(event.target.checked);

     };

    const handleChangeMarkets = (event) => {
        setMarket(event.target.value);
    };
    const handleChangePairs = (event) => {
        
        setPairs(event.target.value);
    };
    const handleChangeAmount = (event) =>{
        setInvestedAmount(event.target.value)
    }
  return (
    <div className='main-dash-con'>
        <NavBar navFlag='1'></NavBar>
        <Grid container className="grid-dash-con" direction='column' alignContent='center' justifyContent='center'>
            <Grid item>
                <p className='wel-txt'>
                    Hey, we are glad you you have decided to join the fleet,
                    This is your command center from here you can control everything, select a
                    forex pair to trade, set up the bot if you are an expert and much more 
                </p>
            </Grid>
            <Grid item>
                <Grid container direction={'row'} alignContent="center" justifyContent='center' >
                    <Grid item xs={8} style={{padding:'1em'}}>
                        <Paper 
                            elevation={24} 
                            className="bot-setup-form" 
                            style={{backgroundColor:"#060624b0",color:"aliceblue",borderRadius:'1em'}}
                        >
                            <div className='type-title'>
                                <span>Bot Setup</span>
                                <FormControlLabel
                                    control={<Switch color='info'/>} 
                                    label={formTypeCheck?"Expert Mode":"Easy Mode"} 
                                    checked={formTypeCheck} 
                                    onChange={handleFormTypeChange}
                                    labelplacement="start"
                                    style={{float:'right'}}
                                />
                            </div>
                            {
                                formTypeCheck?
                                <div>
                                     <form>
                                        <Grid container direction='column' alignContent="center" padding={'2em'}>
                                            <Grid item>
                                                <InputLabel  htmlFor='marketSelection' style={{color:'white',fontSize:"1em",fontFamily:"anakinmono"}}>Select the market you want to trade in</InputLabel>
                                                <MarketTextField
                                                    select
                                                    id="marketSelection"
                                                    variant='filled'
                                                    label="Market"
                                                    value={market}
                                                    onChange={handleChangeMarkets}
                                                    >
                                                        <MenuItem  value="OANDA" selected> OANDA</MenuItem>
                                                        <MenuItem  value="FXCM"> FXCM</MenuItem>

                                                </MarketTextField>*

                                            </Grid>
                                            <Grid item>
                                                <InputLabel  htmlFor='marketSelection' style={{color:'white',fontSize:"1em",fontFamily:"anakinmono"}}>Select the currency pair you want to trade</InputLabel>
                                                <MarketTextField
                                                    select
                                                    id="marketSelection"
                                                    variant='filled'
                                                    label="Pair"
                                                    value={pairs}
                                                    onChange={handleChangePairs}
                                                    >
                                                {
                                                    market === "OANDA"?
                                                    pairsOhanda.map((option) => (
                                                        <MenuItem key={option} value={option}>
                                                          {option}
                                                        </MenuItem>
                                                    )):
                                                    pairsFXCM.map((option) => (
                                                        <MenuItem key={option} value={option}>
                                                          {option}
                                                        </MenuItem>
                                                    ))
                                                }

                                                </MarketTextField>
                                            </Grid>
                                            <Grid item >
                                                <InputLabel  htmlFor="formatted-numberformat-input" style={{color:'white',fontSize:"1em",fontFamily:"anakinmono"}}>
                                                    Enter the amount you want to invest in
                                                </InputLabel>
                                                <AMTTextField InputProps={{
                                                        startAdornment: <InputAdornment style={{color:'white'}} position="start"><span>$</span>$</InputAdornment>,
                                                      }} onBlur={handleChangeAmount} label="Custom CSS" id="custom-css-outlined-input" margin="normal" />      
                                            </Grid>
                                        </Grid>
                                    </form>
                                </div>:
                                <div>
                                    <form>
                                        <Grid container direction='column' alignContent="center" padding={'2em'}>
                                            <Grid item>
                                                <InputLabel  htmlFor='marketSelection' style={{color:'white',fontSize:"1em",fontFamily:"anakinmono"}}>Select the market you want to trade in</InputLabel>
                                                <MarketTextField
                                                    select
                                                    id="marketSelection"
                                                    variant='filled'
                                                    label="Market"
                                                    value={market}
                                                    onChange={handleChangeMarkets}
                                                    >
                                                        <MenuItem  value="OANDA" selected> OANDA</MenuItem>
                                                        <MenuItem  value="FXCM"> FXCM</MenuItem>

                                                </MarketTextField>*

                                            </Grid>
                                            <Grid item>
                                                <InputLabel  htmlFor='marketSelection' style={{color:'white',fontSize:"1em",fontFamily:"anakinmono"}}>Select the currency pair you want to trade</InputLabel>
                                                <MarketTextField
                                                    select
                                                    id="marketSelection"
                                                    variant='filled'
                                                    label="Pair"
                                                    value={pairs}
                                                    onChange={handleChangePairs}
                                                    >
                                                {
                                                    market === "OANDA"?
                                                    pairsOhanda.map((option) => (
                                                        <MenuItem key={option} value={option}>
                                                          {option}
                                                        </MenuItem>
                                                    )):
                                                    pairsFXCM.map((option) => (
                                                        <MenuItem key={option} value={option}>
                                                          {option}
                                                        </MenuItem>
                                                    ))
                                                }

                                                </MarketTextField>
                                            </Grid>
                                            <Grid item >
                                                <InputLabel  htmlFor="formatted-numberformat-input" style={{color:'white',fontSize:"1em",fontFamily:"anakinmono"}}>
                                                    Enter the amount you want to invest in
                                                </InputLabel>
                                                <AMTTextField InputProps={{
                                                        startAdornment: <InputAdornment style={{color:'white'}} position="start"><span>$</span>$</InputAdornment>,
                                                      }} onBlur={handleChangeAmount} label="Custom CSS" id="custom-css-outlined-input" margin="normal" />      
                                            </Grid>
                                            <Grid item>
                                            <InputLabel  htmlFor="formatted-numberformat-input" style={{color:'white',fontSize:"1em",fontFamily:"anakinmono"}}>
                                                    Select the preset you want trade with : 
                                            </InputLabel>
                                            <ToggleButtonGroup
                                              value={alignment}
                                              exclusive
                                              onChange={handleAlignment}
                                              aria-label="text alignment"
                                              style={{background:'#132559'}}
                                            >
                                              <ToggleButton value="preset 1" aria-label="left aligned">
                                                <h2>preset 1</h2>
                                              </ToggleButton>
                                              <ToggleButton value="preset 2" aria-label="centered">
                                              <h2>preset 2</h2>
                                              </ToggleButton>
                                              <ToggleButton value="preset 3" aria-label="right aligned">
                                              <h2>preset 3</h2>
                                              </ToggleButton>
                                            </ToggleButtonGroup>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </div>
                            }
                        </Paper>
                    </Grid>
                    <Grid item xs={4} style={{padding:'1em'}}>
                        <Paper 
                            elevation={24} 
                            className='active-bot-display'
                            style={{backgroundColor:"#060624b0",color:"aliceblue",borderRadius:'1em'}}
                        >
                            <div className='type-title'>
                                <span> Bot Summary</span>
                            </div>        
                            <Divider style={{color:'white',margin:"1em"}}>
                                <Chip  style={{color:'white',background:'black'}} label="Market" />
                            </Divider>
                            <h5 style={{textAlign:'center'}}>{market}</h5>
                            <Divider style={{color:'white',margin:"1em"}}>
                                <Chip  style={{color:'white',background:'black'}} label="Pair Select" />
                            </Divider>
                            <h5 style={{textAlign:'center'}}>{pairs}</h5>
                            <Divider style={{color:'white',margin:"1em"}}>
                                <Chip  style={{color:'white',background:'black'}} label="Market" />
                            </Divider>
                            <h5 style={{textAlign:'center'}}>{investedAmount}</h5>
                            <Divider style={{color:'white',margin:"1em"}}>
                                <Chip  style={{color:'white',background:'black'}} label="Preset" />
                            </Divider>
                            <h5 style={{textAlign:'center'}}>{alignment}</h5>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container direction={"row"}>
                    <Grid item>
                        <Paper 
                            elevation={24} 
                            className='active-bot-display'
                            style={{backgroundColor:"#060624b0",color:"aliceblue"}}
                        >
                            <div className='type-title'>
                                <span >Active Bot</span>
                            </div>        
                            <h1>dd</h1>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Lottie 
	                        options={defaultOptions}
                            height={400}
                            width={400}
                        />
                    </Grid>
                </Grid>
                        
                
            </Grid>
        </Grid>
    </div>
  )
}
