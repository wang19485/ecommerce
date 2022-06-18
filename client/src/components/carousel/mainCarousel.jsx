import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/scale-out-animation/scale-out-animation.scss';
import importAll from "../useImg/useImg.js"
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

const AutoplaySlider = withAutoplay(AwesomeSlider);

export default function MainCarousel() {
  const images = importAll(require.context("../../assets/img/carousel", false, /\.(png|jpe?g|svg)$/));

  const imageInfo = [
    {
      name:"1.jpg",
      buttonText:"TIMELESS FASHION"
    },
    {
      name:"2.jpg",
      buttonText:"WINTERTIME SIGNATURES"
    },
    {
      name:"3.jpg",
      buttonText:"SOMETHING"
    },
    {
      name:"4.jpg",
      buttonText:"SOMETHING"
    },
    {
      name:"5.jpg",
      buttonText:"SOMETHING"
    },
    {
      name:"6.jpg",
      buttonText:"SOMETHING"
    }
  ];


  const [play,setPlay] = React.useState(true);
  return (
    <Box>
      <AutoplaySlider
      play={play}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={3000}
      animation="scaleOutAnimation"
      cssModule={[CoreStyles,AnimationStyles]}
    >
    {imageInfo.map( (item,index) => (
        <div key={index} data-src={images[item.name]}>

        <Button
        variant="contained"
        sx={{
          position:"relative",
          top:{ xs: 50, sm:100, md:180, lg:300},
          display: 'flex',
          flexDirection: 'column',
          py:{ xs:1, sm:1.5, md:2},
          px:{ xs:7, sm:10, md:15},
          '&:hover': {
            bgcolor:"primary.main"
          },
        }}
        onMouseEnter={() => setPlay(false)}
        onMouseLeave={() => setPlay(true)}
        >
        <Typography variant="h6" gutterBottom component="div" >
          {item.buttonText}
        </Typography>

        <Typography variant="button" gutterBottom component="div">
            SEE MORE
        </Typography>
        </Button>

        </div>
    ))}
    </AutoplaySlider>
    </Box>
  );
}
