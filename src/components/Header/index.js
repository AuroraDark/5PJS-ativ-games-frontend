/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaHome, FaUserAlt, FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/a">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/b">
        <FaSignInAlt size={24} />
      </Link>
    </Nav>
  );
}
