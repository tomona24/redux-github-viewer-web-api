import styled from 'styled-components';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Styles from '../Styles';
import Label from '../atoms/Label';
import DropDown from './DropDown';

const menuLink = styled.a`
  padding: 4px;
  margin: 4px;
  text-decoration: none;
  color: ${Styles.FONT_COLOR.WHITE};
  font-size: ${Styles.FONT_SIZE.MIDDLE}px;
  font-family: ${Styles.FONT_FAMILY};
  font-weight: 600;
`;

const dropDownMenu = [
  { to: '/', text: 'Top' },
  { to: '/profile', text: 'Your Profile' },
  { to: '/issue', text: 'Issue' },
  { to: '/pullRequest', text: 'Pull Request' },
];

const menuList = [
  { to: '/issue', text: 'Issue' },
  { to: '/pullRequest', text: 'Pull Request' },
];

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const changeToggle = () => {
    setToggle(!toggle);
  };

  const closeMenu = () => {
    setToggle(false);
  };

  return (
    <Container>
      <div>
        <Label to="/" text="Git Viewer" type="logo" />
        {menuList.map((item, index) => {
          return (
            <Label key={index} type="link" to={item.to} text={item.text} />
          );
        })}
      </div>
      <Awesome onClick={changeToggle}>
        <i className="fas fa-bars" />
      </Awesome>
      <DropDown menu={dropDownMenu} toggle={toggle} onClick={closeMenu} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  background: ${Styles.BACKGROUND_COLOR.DARK};
  color: ${Styles.FONT_COLOR.WHITE};
`;

const Awesome = styled.div`
  display: block;
  padding: 16px;
  font-size: ${Styles.FONT_SIZE.MIDDLE};
`;

export default Header;
