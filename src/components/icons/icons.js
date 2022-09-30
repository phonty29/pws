import {IconInstagram} from './instagram';
import {IconTwitter} from './twitter';
import {IconLinkedin} from './linkedin';
import {IconGitHub} from './github';
import {IconFacebook} from './facebook';

const Icon = ({ name }) => {
    switch (name) {
      case 'External':
        return <IconExternal />;
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