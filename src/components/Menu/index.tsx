import React from 'react';
import { Container } from './styles';
import Logo from "../../assets/logo-transparent-svg.svg"
import { GiHamburgerMenu } from "react-icons/gi"

const Menu: React.FC = () => {
  return (
    <Container>
      <img src={Logo} className="logo" alt="Logo-WN" />

      <div className="responsive-menu">
        <button>
          <GiHamburgerMenu />
        </button>
      </div>

      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/sports">Sports</a>
        </li>
        <li>
          <a href="/books">Books</a>
        </li>
        <li>
          <a href="/movies">Movies</a>
        </li>
      </ul>
    </Container>
  )
}

export default Menu;