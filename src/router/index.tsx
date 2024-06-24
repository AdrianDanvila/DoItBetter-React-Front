import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import { Home } from '@pages/home/Home.tsx'

import { RoutePath } from './constants.ts'
import { Layout } from './Layout.tsx'

export const getRouter = () =>
  createBrowserRouter(
    createRoutesFromElements(
      <Route Component={Layout}>
        <Route
          path={RoutePath.home}
          Component={Home}
        />
      </Route>,
    ),
  )
