import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
// import CustomButtonRoot from './components/Button';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(-10),
  paddingBottom: theme.spacing(-20),
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 10,
  },
}));

export default function ProminentAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" style = {{backgroundColor: 'white', color: 'black' , boxShadow: "0 1px 3px rgb(0 0 0 / 5%), 0 0 1px 0 rgb(0 0 0 / 5%);" }} >
        <StyledToolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
             
            <img src = "./images/Capture.png" alt = "washe" height = "80px"  style = {{marginLeft: "100px"  , marginTop: (-10), marginBotttom: (-30)}} />
          
                     
          
                <a class="item " href="/cities" style = {{marginLeft: "500px", marginTop: "10px", fontSize: "20px" , color: "black", textDecoration: "none", lineHeight: "20px", fontFamily: "Verdana"}}>Cities</a>
                <a class="item " href="/cities" style = {{marginLeft: "70px", marginTop: "10px", fontSize: "20px" , color: "black", textDecoration: "none", lineHeight: "20px", fontFamily: "Verdana"}}>FAQ</a>
                <a class="item " href="/cities" style = {{marginLeft: "70px", marginTop: "10px", fontSize: "20px" , color: "black", textDecoration: "none", lineHeight: "20px", fontFamily: "Verdana"}}>Blog</a>
                <a class="item " href="/cities" style = {{marginLeft: "70px", marginTop: "10px", fontSize: "20px" , color: "black", textDecoration: "none", lineHeight: "20px", fontFamily: "Verdana"}}>Press</a>
   
                <button style = {{height: "36px",  borderRadius: "20px", cursor: "pointer", textAlign: "center", color: "white", backgroundColor: "darkblue " , marginTop: "15px", marginLeft: "70px", fontSize: "20px" , width: "220px", borderStyle: "none"}}> Become a washer </button>
                </IconButton>
        </StyledToolbar>
    
      </AppBar>
    </Box>
  );
}

