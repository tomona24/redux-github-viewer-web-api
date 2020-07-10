import { connect } from 'react-redux';
import Profile from '../components/pages/Profile';

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const UserContainer = connect(mapStateToProps)(Profile);

export default UserContainer;
