import React from 'react';
import './navBar.scss';
import {
  Button,
  CssVarsProvider,
  extendTheme
} from '@mui/joy';
import {useNavigate} from 'react-router-dom'

const theme = extendTheme({
  palette: {
    background: {
      main: '#50A4B9',
      hover: '#367584'
    }
  }
})

const buttonSx = {
  "&:hover":{
    bgcolor: "rgba(0,0,0,1)"
  },
  bgcolor: "rgba(0,0,0,.1)",
  color: "white"
}
const TopNav = () => {
  const navigate = useNavigate();
  
  return (
    <>
    <CssVarsProvider theme={theme}>
      <Button  variant="soft" onClick={()=>navigate('/')}sx={buttonSx}>Home</Button>
      <Button  variant="soft" onClick={()=>navigate('/roller')}sx={buttonSx}>Dice Roll</Button>
    </CssVarsProvider>
    </>
  )
}

export default TopNav;