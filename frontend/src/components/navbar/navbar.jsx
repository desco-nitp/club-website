import React,{useState} from 'react'
import HorizontalNav from './horizontalnav'
import TemporaryDrawer from './drawer'
const NavBar=()=>{

    // console.log(window.screen.width+"\\"+window.screen.height);

    const [width,setwidth]=useState(window.screen.width);
    window.addEventListener('resize',()=>{
        setwidth(window.screen.width);
    });
    if (width>= 768 ) {
        // Resolution is 1024x768 or above
        return(
            <HorizontalNav />    
        );
        ;
      }
       return(
        <TemporaryDrawer className="z-40 ml-10 mb-20" />
       );
    
}

export default NavBar