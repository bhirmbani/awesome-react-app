import React from 'react';
import { Menu } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



const NavBarComponent = () => (
    <Menu>
      <Menu.Item header><Link to={'/'}>InstaFavorite</Link></Menu.Item>
      <Menu.Item header><Link to={'/my-favorite'}>My Favorite Photos</Link></Menu.Item>
      <Menu.Item header><Link to={'/add-photo'}>Add Photo</Link></Menu.Item>
    </Menu>
);

export default NavBarComponent;

