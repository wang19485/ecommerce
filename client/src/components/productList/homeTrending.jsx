import React from "react";
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ListHeader from "./productListHeader";
import axios from 'axios';

export default function ProductList() {

  const [imgArr,setImgArr] = React.useState([]);
  //http://localhost:5000/
  React.useEffect(() => {
    axios.get('/api/trending')
      .then(function (response) {
        setImgArr(response.data);
      })
      .catch(function (error) {
        console.log(error);
    })

  },[]);

  return (
    <Box
    sx={{
      mx:{xs:1, sm:3, md:7, lg:14},
      mt:8,
      mb:7
    }}
    >
    <ListHeader name="TRENDING"/>
    <Grid container spacing={3}>
            {imgArr.map((card,index) => (
              <Grid item key={index} xs={12} sm={6} md={4} >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  variant="none"
                >
                  <CardActionArea>
                  <CardMedia
                    component="img"
                    image={card.url}
                    alt={card.alt}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography align="center" gutterBottom variant="h6">
                      {card.alt}
                    </Typography>
                    <Typography align="center" variant="subtitle2">
                      $199
                    </Typography>
                  </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
          </Box>
  );
}
