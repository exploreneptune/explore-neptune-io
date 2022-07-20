import React, { useRef } from 'react';
import './App.css';
import HeaderSimple from './components/navbar';
import HeroBullets from './components/hero';
import { FeaturesTitle } from './components/feature';
import { FooterSocial } from './components/footer';
import { Teamcard } from './components/teamcard';

const links = [
  {
    link: '/about',
    label: 'About',
  },
  {
    link: '/team',
    label: 'Team',
  },
  {
    link: 'https://github.com/oslabs-beta/Neptune',
    label: 'Github',
  },
  {
    link: '/blog',
    label: 'Blog',
  },
];

function App() {
  return (
    <div>
      <HeaderSimple key={1} links={links} />
      <HeroBullets />
      <FeaturesTitle />
      <Teamcard />
      <FooterSocial />
    </div>
  );
}

export default App;
