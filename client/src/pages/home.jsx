import React from "react";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import PrimarySearchAppBar from "../components/topNavBar/topNavBar"
import StickyFooter from "../components/footer/footer"
import MainCarousel from "../components/carousel/mainCarousel"
import HomeTrending from "../components/productList/homeTrending"
import BottomSection from "../components/bottomSection/bottomGrid"

const newTheme = createTheme({
  palette: {
    //mode: 'dark',
    primary:{
      main:'#fff'
    }
  },
});

export default function Home() {
  return (
    <>
        <CssBaseline />
        <ThemeProvider theme={newTheme}>
          <Box sx={{
            display:'flex',
            flexDirection: 'column',
          }}>

          <PrimarySearchAppBar />
          <MainCarousel />
          <HomeTrending />
          <BottomSection />
          <StickyFooter />

          </Box>
        </ThemeProvider>
    </>
  );
}
