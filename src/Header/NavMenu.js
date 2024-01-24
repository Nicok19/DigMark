import React from 'react';

const NavMenu = () => {
  const menuItems = [
    { id: 1, title: 'About Us', link: '/' },
    { id: 2, title: 'Our Work', link: '/about' },
    { id: 3, title: 'References', link: '/services' },
    { id: 4, title: 'Contact Us', link: '/contact' },
  ];

  return (
    <nav>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;

