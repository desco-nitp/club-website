import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';


export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  let pages=["/","/works","/events","/team","/blogs","/","/"];
  const DrawerList = (
    <Box sx={{ width: 250 , height:1000}} style={{backgroundColor:"#000000"}} role="presentation" onClick={toggleDrawer(false)}>
      <List className='flex flex-col justify-center items-center gap-5 text-3xl'>
        {['Home', 'Works', 'Events', 'Teams','Blogs','Contact Us','FAQs'].map((text, index) => (
          <ListItem key={text} disablePadding style={{color:'#FFFFFF'}} >
          <Link to={pages[index]}>
            <ListItemButton >
              <ListItemText primary={text}  />
            </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      
    </Box>
  );

  return (
    <div className='z-40'>
    <button onClick={toggleDrawer(true)} className='h-10 w-10 bg-rose-100 ml-3'>

      <MoreVertOutlinedIcon  />
    </button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}