// // action types
const EDIT_ISSUE = "EDIT_ISSUE";

// action creators
const addIssue = (user) => {
    return {
      type: EDIT_ISSUE,
      user,
    };
  };

const kariData = {
  id: "ore-gorira",
  name: "Tomona",
  email: "kari@example.com",
};

const initialIssues = [kariData];

const userReducer = (state = initialIssues, action) => {
  switch (action.type) {
    case EDIT_ISSUE:
      return [...state, action.user];
    default:
      return state;
  }
};

export default userReducer;
