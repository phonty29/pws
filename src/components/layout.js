import React, {useEffect, useState} from 'react';
import styled, { ThemeProvider } from 'styled-components';

const Layout_styled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({children, location}) => {
    const isMainPage = location.pathname == '/';
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if(isLoading) 
            return;

        if (location.hash)
            scrollToTheSection(location.hash.substring(1));
        
        externalLinksOnNewTab();
    }, [isLoading]);

    const externalLinksOnNewTab = () => {
        const links = Array.from(document.querySelectorAll('a'));
        if (links.length > 0) {
            links.forEach(link => {
            if (link.host !== window.location.host) {
              link.setAttribute('rel', 'noopener noreferrer');
              link.setAttribute('target', '_blank');
            }
          });
        }
    };
    const scrollToTheSection = (id) => {
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView();
            el.focus();
           }
        }, 0);
    };

    return (
        <>  
            <Head/>
        </>
    );
};

export default Layout;