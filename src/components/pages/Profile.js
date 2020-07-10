import styled from 'styled-components';
import React from 'react';
import Styles from '../Styles';
import PropTypes from 'prop-types';

const Field = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  font-size: 0.95em;
  color: ${(props) => (props.bold ? '#000' : '#444')};
  flex-direction: ${(props) =>
    props.direction === 'column' ? 'column' : 'row'};
`;

const Table = styled.div`
  display: flex;
  min-width: 400px;
  width: 80%;
  max-width: 600px;
  margin: 50px auto;
  border: 1px solid ${Styles.BORDER_COLOR};
`;

const Label = styled.h2`
  margin: 8px auto;
  width: 200px;
`;

const Profile = (props) => {
  const { user } = props;
  return (
    <div>
      <Label>Profile</Label>
      <Table>
        <Field direction="column">
          <Field>プロフィール</Field>
          <Field>
            <img src="img/ui.png" alt="icon" />
          </Field>
        </Field>
        <Field direction="column">
          <Field>ユーザ名</Field>
          <Field bold>{user.name}</Field>
          <Field>メールアドレス</Field>
          <Field bold>{user.email}</Field>
        </Field>
      </Table>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Profile;
