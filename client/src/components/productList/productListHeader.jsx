import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function productListHeader(props) {
  return (
    <Box sx={{
      display: 'flex',
      py:4,
      justifyContent: 'center'
    }}>
      <Typography gutterBottom variant="h6">
        {props.name}
      </Typography>
    </Box>
  );
}
