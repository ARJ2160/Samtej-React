import React from 'react';
import { FaFacebook, FaLinkedin, FaShoppingCart } from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'Products',
  },
  {
    id: 2,
    url: '/',
    text: 'Home',
  },
  {
    id: 3,
    url: '/#about',
    text: 'About',
  },
  {
    id: 4,
    url: '/#awards',
    text: 'Awards',
  },
  {
    id: 5,
    url: '/#contact',
    text: 'Contact',
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaShoppingCart />,
  },
];

export const sublinks = [
    {
      page: 'Shirt Manufacturing Products',
      links: "/shirtmachines"
    },
    {
      page: 'Card Manufacturing Products',
      links: "/cardmachines"
    },
    {
      page: 'Good Shit',
      links: "/goodshit"
    },
  ];