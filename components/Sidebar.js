import { Menu, MenuItem } from "@mui/material";
import { Data, Tools, Explore, Star, Cog } from "@mui/icons-material";
import styled from 'styed-components';
import { Image } from 'next/Image';

export const SideBar = () => {

  const items = [
    {
      name: 'Home',
      icon: Data
    },
    {
      name: 'Trending',
      icon: Tools
    },
    {
      name: 'Explore',
      icon: Explore
    },
    {
      name: 'Favorites',
      icon: Star
    },
    {
      name: 'Settings',
      icon: Cog
    }
  ]

  return (
     <Menu>
       <DasboardHeader>
         <Image src="/public/assets/logo.png" />
       </DasboardHeader>
       {items.map((item, index) => (
         <MenuItem key={index}>
           <MenuIcon> {<item.icon />} </MenuIcon>
           <MenuLabel>{item.name}</MenuLabel>
         </MenuItem>
       ))}
     </Menu>
  )
}


const DasboardHeader = styled.div`
  display: block;
`;

const MenuLabel = styled.span`
  color:
`;

const MenuIcon = styled.span`
  border-radius: ;
`
