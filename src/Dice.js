import React, { useEffect, useState } from 'react';
import { Radio, RadioGroup, Button, Grid, Typography, Input } from '@mui/joy';

const Roller = () => {
  const [rolledValue1, setRolledValue1] = useState(0);
  const [rolledValue2, setRolledValue2] = useState(0);
  const [trigger, setTrigger] = useState();
  const [textColor, setTextColor] = useState('white');
  const [toCheck, setToCheck] = useState();
  const [modifier, setModifier] = useState(0);
  const [loHi, setLoHi] = useState();

   useEffect(() => {
    if(!toCheck)
    setTextColor('white')
    let i = 100;
    if (!isNaN(trigger)) {
      var loop = setInterval(() => {
        setRolledValue1(Math.floor(Math.random() * (trigger) + 1) + modifier);
      }, i)
      setTimeout(() => { 
        clearInterval(loop);
       
      }, 1000);
      setTrigger('n')
    }
    console.log('to check ',toCheck)
  }, [trigger])

  useEffect(()=> {
    if(loHi === 'higher'){
      if (toCheck !== undefined){
        console.log(toCheck)
        console.log(rolledValue1)
        if (rolledValue1 < parseInt(toCheck)) {
          setTextColor('red')
      } else {
          setTextColor('green')
      }}
    }else{
      if (toCheck !== undefined){
        console.log(toCheck)
        console.log(rolledValue1)
        if (rolledValue1 > parseInt(toCheck)) {
          setTextColor('red')
      } else {
          setTextColor('green')
      }}
    }
  },[rolledValue1, rolledValue2])

  useEffect(()=> {
    if(!modifier)
      setModifier(0);
  },[modifier])
  const lowerOrHigher = (event => {
    setLoHi(event.target.value);
  }) 

  return (
    <>
    <Grid container spacing={2} sx={{marginLeft:'1vw', flexGrow: 1}} direction="column">
      <Grid alignItems="center" justifyContent="center" direction="column" sx={{textAlign:'center'}}>
        <h5 style={{ color: "#ffffff" }}>
          Select dice
        </h5>
      </Grid>
      <Grid alignItems="center" justifyContent="center" direction="column" sx={{textAlign:'center', gap: 2}}>
          {['2', '4', '6', '8', '10', '12', '20', '100'].map((walls) => (
              <Button value={walls} sx={{margin: 0.5, width: '50px', height: '50px', color:'white', borderRadius: '50%', bgcolor:'#367584',  '&:hover':{color:'black', bgcolor: '#5e909c'}}} onClick={(e) => {
                if (!isNaN(e.target.value)) {
                  setTrigger(e.target.value)
                }
              }}>{walls}</Button>
          ))}
        </Grid>
        <Grid alignItems="center" display='flex' justifyContent="center" direction="column" sx={{marginTop: '2vh'}}>
          <Typography sx={{ color: textColor}} level="h1">{rolledValue1}</Typography >
        </Grid>
        <Grid alignItems="center" display='flex' justifyContent="center" direction="column" sx={{marginTop: '4vh'}}>
          <RadioGroup defaultValue="lower" name="radio-buttons-group" sx={{ flexDirection: 'row', margin: 0, gap: 2, mb: 2, flexWrap: 'wrap', height: '10px' }}>
            <Radio value="lower" label="Lower than" variant="soft" sx={{ color: 'white' }} onChange={lowerOrHigher}/>
            <Radio value="higher" label="Higher than" variant="soft" sx={{ color: 'white', margin: 0 }} onChange={lowerOrHigher}/>
          </RadioGroup>
        </Grid>
        <Grid alignItems="center" display='flex' justifyContent="center" direction="column" sx={{marginTop: '4vh'}}>
          <Input onChange={(e) => setToCheck(e.target.value)} placeholder="to pass" sx={{ float: 'left', height: '50px', width: '90px'}} />
          <Input onChange={(e) => setModifier(parseInt(e.target.value))} placeholder="+/-" sx={{ float: 'left', height: '50px', width: '90px'}} />
        </Grid>
      </Grid>
    </>
  );
}

export default Roller;