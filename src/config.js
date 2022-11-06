module.exports = {
  email: 'amedov.bekmuhamet@gmail.com',

  socialMedia: [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/bekmukhamet.amedov/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/bekmuhamet-amedov-4a5776244/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/BekmuhametA',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/phonty29',
    },    
    {
      name: 'GitHub',
      url: 'https://github.com/phonty29',
    },
  ],
  
  navbarLinks: [
    {
      name: 'Home',
      url: '/#',
    },
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Jobs',
      url: '/#jobs',
    },    
    {
      name: 'Blog',
      url: '/#blog',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],
  
  colors: {
    violet: '#663399',
    whitesmoke: '#f5f5f5',
    white: '#ffffff',
  },
  
  scrollRevealConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};