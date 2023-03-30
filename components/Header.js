import { Appbar } from "@mui/material";
import styled from 'styled-components';

const Header = () => {
 return (
    <Appbar class="header-app-bar">
      <Menu>
        <div className="right-menu">
          <MenuItems>
            <Alarm />
          </MenuItems>
          <MenuItems>
            <Sound />
          </MenuItems>
          <MenuItems>
            <Gigs />
          </MenuItems>
        </div>
      </Menu>
    </Appbar>
 );
}
