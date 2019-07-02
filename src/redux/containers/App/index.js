import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import * as ROUTES from '../../../constants/routes';
import HomeContainer from '../HomeContainer';

makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
}));

const App = () => (
  <Container component="main" maxWidth="xs">
    <Router>
      <Router>
        <Route exact path={ROUTES.LANDING} component={HomeContainer} />
      </Router>
    </Router>
  </Container>
);

export default App;
