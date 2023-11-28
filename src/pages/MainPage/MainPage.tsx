import { FC } from 'react';
import { Link } from 'react-router-dom';

import Section from '../../ui/Section/Section';
import Grid from '../../ui/Grid/Grid';

import constants from '../../constants/constants';

import './MainPage.scss';

const MainPage: FC = () => (
  <Section>
    <h2>MainPage</h2>
    <Grid container>
      <Grid item md={6}>
        <Link to={constants.PATH.UNCONTROL} className="nav__link">
          UNCONTROL
        </Link>
      </Grid>
      <Grid item md={6}>
        <Link to={constants.PATH.CONTROL} className="nav__link">
          CONTROL
        </Link>
      </Grid>
    </Grid>
  </Section>
);

export default MainPage;
