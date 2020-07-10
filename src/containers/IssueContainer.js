import { connect } from 'react-redux';
import { addIssue, deleteIssue, editIssue } from '../actions';
import Issue from '../components/organisms/Issue';

const mapStateToProps = (state) => {
  return {
    issues: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewIssue: (issue) => {
      dispatch(addIssue(issue));
    },
    deleteChosenIssue: (issue) => {
      dispatch(deleteIssue(issue));
    },
    uploadEditIssue: (issue) => {
      dispatch(editIssue(issue));
    },
  };
};

const IssueContainer = connect(mapStateToProps, mapDispatchToProps)(Issue);

export default IssueContainer;
