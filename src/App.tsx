import React, { useRef } from 'react';
import './App.css';
import HeaderSimple from './components/Navbar';
import HeroBullets from './components/Hero';
import { FeaturesTitle } from './components/Feature';
import { FooterSocial } from './components/Footer';
import { TeamCard } from './components/TeamCard';

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
      <TeamCard />
      <FooterSocial />
    </div>
  );
}

export default App;
