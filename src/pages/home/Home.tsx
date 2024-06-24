import MediaQuery from 'react-responsive'

import { BREAKPOINTS, MAX_WIDTH_TABLE, MIN_WIDTH_TABLE } from '@constants'

import './home.scss'

export const Home = () => (
  <section className="home-container">
    <MediaQuery minWidth={BREAKPOINTS.desktop}>
      <div>a</div>
    </MediaQuery>
    <MediaQuery
      minWidth={MIN_WIDTH_TABLE}
      maxWidth={MAX_WIDTH_TABLE}>
      <div>a</div>
    </MediaQuery>
    <MediaQuery maxWidth={BREAKPOINTS.tablet}>
      {' '}
      <div>a</div>
    </MediaQuery>
  </section>
)
