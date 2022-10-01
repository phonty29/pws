import React from 'react';
import {IconInstagram, IconTwitter, IconLinkedin, IconGitHub, IconFacebook,IconExternal } from './index';

const Icon = ({ name }) => {
    switch (name) {
      case 'Facebook':
        return <IconFacebook />;   
      case 'GitHub':
        return <IconGitHub />;  
      case 'Instagram':
        return <IconInstagram />; 
      case 'Linkedin':
        return <IconLinkedin />;
      case 'Twitter':
        return <IconTwitter />;          
      default:
        return <IconExternal />;
    }
  };
  
export default Icon;