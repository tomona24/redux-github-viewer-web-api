import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import Styles from '../Styles';

export const Label = (props) => {
  const { text, type } = props;

  switch (type) {
    case 'label':
      return <labelModule type={type}>{text}</labelModule>;
    case 'logo':
      return <logo href="">Github Viewer</logo>;
    case 'link':
      return <link href="">{text}</link>;
    default:
      return null;
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

const logo = styled.a`
  padding: 4px;
  margin: 4px;
  text-decoration: none;
  color: ${Styles.FONT_COLOR.WHITE};
  font-size: ${Styles.FONT_SIZE.HEADER}px;
  font-family: ${Styles.FONT_FAMILY};
  font-weight: 800;
`;

const link = styled.a`
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
};

MenuLabel.propTypes = {
  text: PropTypes.string.isRequired,
};
