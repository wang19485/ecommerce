import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import BottomList from "./bottomList"

export default function bottomGrid() {
  const listObjs = [
    {
      id:10,
      title:"CUSTOMER SERVICE",
      content:["Contact Us", "Shipping", "Ordering and Payment", "Returns"]
    },
    {
      id:20,
      title:"LEGAL & COOKIES",
      content:["Terms & Conditions","Privacy Policy", "Cookie Policy"]
    },
    {
      id:30,
      title:"FOLLOW US",
      content:["Facebook","Twitter","Instagram"]
    },
    {
      id:40,
      title:"OUR COMPANY",
      content:["Our History","Careers"]
    }
  ];
  return (
    <Box
    sx={{
      mx:{xs:1, sm:3, md:7, lg:14}
    }}
    >
      <Grid container>
        {listObjs.map( list => (
          <Grid key={list.id} item xs={12} sm={3}>
            <BottomList
            id={list.id}
            title={list.title}
            content={list.content}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
