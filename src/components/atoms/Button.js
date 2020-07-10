import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import Styles from '../Styles';

const ButtonDefault = styled.div`
  border-radius: 6px
  cursor: pointer;
  display: block;
  text-align: center;
  min-width: 70px;
  color: white;
  font-size: 1rem;
  padding: 6px 16px;
  margin: 6px 4px;
  border-radius: 6px;
  text-decoration: none;
`;

const ButtonPrimary = styled(ButtonDefault)`
  color: #fff
  background: ${Styles.COLOR.PRIMARY};
  border-bottom: 2px solid rgb(40, 167, 69);
  &:hover {
    background: #28a745;
    border-bottom: 2px solid #208437;
  }
`;

const ButtonSecondary = styled(ButtonDefault)`
  color: #000
  background: ${Styles.COLOR.SECONDARY};
  border-bottom: 2px solid rgb(175, 28, 42);
  &:hover {
    background: #af1c2a;
    border-bottom: 2px solid #671019;
  }
`;

const map = {
  default: ButtonDefault,
  primary: ButtonPrimary,
  secondary: ButtonSecondary,
};

const Button = (props) => {
  const { text, onClick, type } = props;
  const component = map[type] || map.default;
  return React.createElement(component, { onClick }, text);
  // return (
  //     <component onClick={onClick}>
  //       {text}
  //     </component>
  // );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default Button;
