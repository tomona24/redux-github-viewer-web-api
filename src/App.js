import React from 'react';
import Modal from 'react-modal';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/organisms/Header';
import Index from './components/pages/Index';
import Issue from './components/pages/Issue';
import UserContainer from './containers/UserContainer';
import Profile from './components/pages/Profile';
import PullRequest from './components/pages/PullRequest';

Modal.setAppElement('#root');

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <h1>ごはん</h1>
        <UserContainer />
        {/* <Route exact path="/react-redux-githubViewer" component={Index} /> */}
        {/* <Route exact path="/react-redux-githubViewer/issue" component={Issue} /> */}
        {/* <Route exact path="/react-redux-githubViewer/pullRequest" component={PullRequest} /> */}
        <Route
          exact
          path="/react-redux-githubViewer/profile"
          component={Profile}
        />
      </Router>
    </div>
  );
}

export default App;
