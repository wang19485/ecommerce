import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import imgLogo from "../../assets/img/favicon-32x32.png"
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 3.5),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'space-between'
}));


const mainMenuListArr = ['NEW IN', 'WOMEN', 'MEN', 'ACCESSORIES','CLEARANCE'];
const womenMenu = ['Sneakers','High Heels', 'Slippers'];
const menMenu = ['Sneakers', "Running Shoes",'Boots','Trainers','Oxfords', 'Slippers'];
const accessoriesMenu = ['Socks','Hats'];

const subMenuObj = {
  0:[],
  1:womenMenu,
  2:menMenu,
  3:accessoriesMenu,
  4:[]
};

export default function SwipeableTemporaryDrawer(props) {

  const [subMenuIndex, setSubMenuIndex] = React.useState(null);

  const list = () => {
    let arr = subMenuIndex ? subMenuObj[subMenuIndex] : mainMenuListArr;
    const clickListener = index => {
        if (index === 4) {
          return alert("CLEARANCE clicked");
        }
        if (!subMenuIndex) {
          return setSubMenuIndex(index);
        } else {
          return alert(`${index} clicked`);
        }
    };
    return (
        <List>
        {arr.map((text, index) => (
          <ListItem key={index} onClick={() => clickListener(index)}>
            <ListItemButton>
              <ListItemText primaryTypographyProps={{ fontWeight: 'fontWeightMedium', color:"common.black"}} primary={text} />
              {(!subMenuIndex && index !== 4) && <ChevronRightIcon />}
            </ListItemButton>
          </ListItem>
        ))}
        </List>
    );
  };

  return (
    <SwipeableDrawer
    anchor="left"
    open={props.open}
    onClose={props.onClose}
    onOpen={props.onOpen}
    >
    <Box
      sx={{ width: 300}}
    >
      <DrawerHeader>
      {subMenuIndex ? (
        <ListItemButton onClick={() => setSubMenuIndex(null)} sx={{ml:-1.75, pl:1}} >
        <ChevronLeftIcon />
        <ListItemText primary={mainMenuListArr[subMenuIndex]} primaryTypographyProps={{ fontWeight: 'fontWeightMedium', color:"common.black"}}/>
        </ListItemButton>
      ) : (<img src={imgLogo} alt={"logo"}/>)
      }
        <IconButton onClick={props.onClose} edge="end">
          <CloseIcon />
        </IconButton>
      </DrawerHeader>

      {list()}

      <Divider />

      <List>
      <ListItem>
        <ListItemButton>
          <ListItemIcon sx={{color:"black"}}>
            <HelpOutlineIcon />
          </ListItemIcon>
          <ListItemText primary="Need help?" primaryTypographyProps={{ fontWeight: 'fontWeightMedium', color:"common.black"}} />
        </ListItemButton>
      </ListItem>
      </List>
    </Box>
    </SwipeableDrawer>
  );
}
