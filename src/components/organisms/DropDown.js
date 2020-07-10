import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const style = {
  textDecoration: 'none',
};

const DropDown = (props) => {
  const { toggle, menu } = props;
  if (toggle) {
    return (
      <Div>
        {menu.map((item) => {
          return (
            <div key={item.text}>
              <Link to={item.to}>{item.text}</Link>
            </div>
          );
        })}
      </Div>
    );
  }
  return <Div hidden />;
};

const Div = styled.div`
  position: absolute;
  right: 8px;
  top: 50px;
  padding: 8px 0px;
  width: 200px;
  background: #fff;
  box-shadow: 3px 3px 3px #eee;
  display: ${(props) => (props.hidden ? 'none' : 'block')};
  z-index: 500;
`;

DropDown.propTypes = {
  toggle: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  menu: PropTypes.arrayOf.isRequired,
};

export default DropDown;
