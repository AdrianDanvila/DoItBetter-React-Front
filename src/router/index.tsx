import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import { Home } from '@pages/home/Home.tsx'

import { PrivateLayout } from '../layouts/privateLayout/PrivateLayout.tsx'
import { PublicLayout } from '../layouts/publicLayout/PublicLayout.tsx'

import { RoutePath } from './constants.ts'

import { Routines } from '@/pages/routines/Routines.tsx'

export const getRouter = () =>
  createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route Component={PublicLayout}>
          <Route
            path={RoutePath.home}
            Component={Home}
          />
        </Route>

        <Route Component={PrivateLayout}>
          <Route
            path={RoutePath.main}
            Component={Routines}
          />
          <Route
            path={RoutePath.routines}
            Component={Routines}
          />
        </Route>
      </Route>,
    ),
  )
