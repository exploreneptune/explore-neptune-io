import React from 'react';
import './App.css';
import HeaderSimple from './components/Navbar';
import HeroBullets from './components/Hero';
import { FeaturesTitle } from './components/Feature';
import { FooterSocial } from './components/Footer';
import { TeamContainer } from './components/TeamContainer';

const links = [
  {
    link: '/',
    label: 'About',
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
      <TeamContainer />
      <FooterSocial />
    </div>
  );
}

export default App;
