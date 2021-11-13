import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Forms from './Forms';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: '#FAFAFA', height: '100vh' }}  >

<h1 style = {{ marginLeft: "100px" , fontSize: "55px", lineHeight: "85px", fontFamily: "sans-serif", fontWeight: "50"}}> CAR WASHES {<span style = {{fontWeight: "900"}}>DELIVERED</span>}</h1>
     
     <img src = "./images/Capture2.png" alt = "car wash" width = "1487px" height = "700px"/>
     <Forms/>
        </Box>

      
      </Container>
    </React.Fragment>
  );
}
