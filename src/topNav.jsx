import React from 'react';
import {
  Button
} from '@mui/joy';
import {useNavigate} from 'react-router-dom'

const TopNav = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button  onClick={()=>navigate('/')}>Home</Button>
      <Button  onClick={()=>navigate('/roller')}>Dice Roll</Button>
    </>
  )

}

export default TopNav;