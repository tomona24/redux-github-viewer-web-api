// // action types
const ADD_ISSUE = 'ADD_ISSUE';
const DELETE_ISSUE = 'DELETE_ISSUE';
const EDIT_ISSUE = 'EDIT_ISSUE';

// action creators
const addIssue = (issue) => {
  return {
    type: ADD_ISSUE,
    issue,
  };
};

const deleteIssue = (id) => {
  return {
    type: DELETE_ISSUE,
    id,
  };
};

const editIssue = (issue) => {
  return {
    type: EDIT_ISSUE,
    issue,
  };
};

const kariData = {
  id: 'ore-gorira',
  title: 'ore',
  detail: 'meshi kuu',
  status: 'banana',
  author: 'umai',
  createdDate: 'gorira',
  updatedDate: 'gorira',
};

const kariData2 = {
  id: 'are-gorira',
  title: 'are',
  detail: 'meshi kuu',
  status: 'banana',
  author: 'umai',
  createdDate: 'gorira',
  updatedDate: 'gorira',
};

const kariData3 = {
  id: 'ure-gorira',
  title: 'ure',
  detail: 'meshi kuu',
  status: 'banana',
  author: 'umai',
  createdDate: 'gorira',
  updatedDate: 'gorira',
};

const initialIssues = [kariData, kariData2, kariData3];

const issueReducer = (state = initialIssues, action) => {
  switch (action.type) {
    case ADD_ISSUE:
      return [...state, action.issue];
    case DELETE_ISSUE:
      return state.filter((issue) => issue.id !== action.id);
    case EDIT_ISSUE:
      return state.map((issue) =>
        issue.id === action.issue.id ? action.issue : issue
      );
    default:
      return state;
  }
};

export default issueReducer;
