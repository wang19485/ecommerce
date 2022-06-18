import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function BottomList(props) {
  const [open, setOpen] = React.useState(false);

  function handleClick(){
    setOpen(!open);
  };

  return (
    <List>
    <ListItem
    onClick={() => handleClick()}
    >
      <ListItemButton>
        <ListItemText primary={props.title} primaryTypographyProps={{ fontWeight: 'fontWeightMedium', color:"common.black"}} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
    </ListItem>
    {open &&
      props.content.map( item => (
        <ListItem>
          <ListItemButton>
            {item === "Facebook" && <FacebookIcon />}
            {item === "Twitter" && <TwitterIcon />}
            {item === "Instagram" && <InstagramIcon />}
            <ListItemText primary={item} primaryTypographyProps={{ fontWeight: 'fontWeightRegular'}} />
          </ListItemButton>
        </ListItem>
      ))
    }
    </List>


  );
}
//{item == "Facebook" && facebook}
