import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Styles from '../Styles';

const Label = (props) => {
  const { to, text, type } = props;

  switch (type) {
    case 'label':
      return <labelModule type={type}>{text}</labelModule>;
    case 'logo':
      return (
        <Link to={to}>
          <logo>{text}</logo>
        </Link>
      );
    case 'link':
      return (
        <Link to={to}>
          <link>{text}</link>
        </Link>
      );
    default:
      return <div>{text}</div>;
  }
};

const labelModule = styled.h2`
  padding: 4px 0px;
  margin: 4px;
  color: #000;
  font-size: ${Styles.FONT_SIZE.LARGE}px;
  font-family: ${Styles.FONT_FAMILY};
  font-weight: 700;
`;

const logo = styled.div`
  padding: 4px;
  margin: 4px;
  text-decoration: none;
  color: ${Styles.FONT_COLOR.WHITE};
  font-size: ${Styles.FONT_SIZE.HEADER}px;
  font-family: ${Styles.FONT_FAMILY};
  font-weight: 800;
`;

const link = styled.div`
.link {
  padding: 4px;
  margin: 4px;
  text-decoration: none;
  color: ${Styles.FONT_COLOR.WHITE};
  font-size: ${Styles.FONT_SIZE.MIDDLE}px;
  font-family: ${Styles.FONT_FAMILY};
  font-weight: 600;
  &-menu {
    color: ${Styles.FONT_COLOR.WHITE};
    font-size: ${Styles.FONT_SIZE.MIDDLE}px;
    font-family: ${Styles.FONT_FAMILY};
  }
  &-nav
  
  &-tab

  }
`;

Label.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Label;
