import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import ToDos from '../todo/ToDos';

const Home = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Container>
        <ToDos />
      </Container>
    </Fragment>
  );
};

export default Home;
