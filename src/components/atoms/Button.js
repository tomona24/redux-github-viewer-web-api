import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import Styles from '../Styles';

const Button = (props) => {
  const { text, onClick, type } = props;
  return (
    <Container>
      <div onClick={onClick} className={'btn' + `btn-${type}`}>
        {text}
      </div>
    </Container>
  );
};

const Container = styled.div`
.btn {
  font-family: ${Styles.FONT_FAMILY};
  font-size: ${Styles.FONT_SIZE.DEFAULT}px;
  font-weight: 600;
  border-radius: ${Styles.BORDER_RADIUS};
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
  &-primary {
    color: #fff
    background: rgb(66, 195, 96);
    border-bottom: 2px solid rgb(40, 167, 69);
  }
  &-secondary {
    color: #000
    background: rgb(215, 58, 73);
    border-bottom: 2px solid rgb(175, 28, 42);
  }
}
`;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default Button;
