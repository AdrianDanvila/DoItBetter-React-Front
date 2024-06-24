import MediaQuery from 'react-responsive'

import { BREAKPOINTS, MAX_WIDTH_TABLE, MIN_WIDTH_TABLE } from '@constants'

import mockupDesktop from '@assets/mockupDesktop.png'
import mockupMobile from '@assets/mockupMobile.png'
import mockupTablet from '@assets/mockupTablet.png'

import './home.scss'

export const Home = () => (
  <section className="home-container">
    <MediaQuery minWidth={BREAKPOINTS.desktop}>
      <img
        src={mockupDesktop}
        alt="mockup"
      />
    </MediaQuery>
    <MediaQuery
      minWidth={MIN_WIDTH_TABLE}
      maxWidth={MAX_WIDTH_TABLE}>
      <img
        src={mockupTablet}
        alt="mockup"
      />
    </MediaQuery>
    <MediaQuery maxWidth={BREAKPOINTS.tablet}>
      <img
        src={mockupMobile}
        alt="mockup"
      />
    </MediaQuery>
  </section>
)
