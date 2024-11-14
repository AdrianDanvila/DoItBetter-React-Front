import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import { Home } from '@pages/home/Home.tsx'

import { PrivateLayout } from '../layouts/privateLayout/PrivateLayout.tsx'
import { PublicLayout } from '../layouts/publicLayout/PublicLayout.tsx'

import { ROUTE_PATH } from './constants.ts'

import { Auth } from '@/pages/auth/Auth.tsx'
import { Execises } from '@/pages/exercises/Execises.tsx'
import { Main } from '@/pages/main/Main.tsx'
import { Profile } from '@/pages/profile/Profile.tsx'
import { RoutinesDetails } from '@/pages/routineDetails/RoutineDetails.tsx'
import { Routines } from '@/pages/routines/Routines.tsx'

export const getRouter = () =>
  createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route Component={PublicLayout}>
          <Route
            path={ROUTE_PATH.home}
            Component={Home}
          />
          <Route
            path={ROUTE_PATH.login}
            Component={Auth}
          />
          <Route
            path={ROUTE_PATH.register}
            Component={Auth}
          />
        </Route>

        <Route Component={PrivateLayout}>
          <Route
            path={ROUTE_PATH.main}
            Component={Main}
          />
          <Route
            path={ROUTE_PATH.routines}
            Component={Routines}
          />
          <Route
            path={ROUTE_PATH.exercises}
            Component={Execises}
          />
          <Route
            path={
              ROUTE_PATH.routinesDetail || ROUTE_PATH.publishedRoutinesDetail
            }
            Component={RoutinesDetails}
          />

          <Route
            path={ROUTE_PATH.publishedRoutinesDetail}
            Component={RoutinesDetails}
          />
          <Route
            path={ROUTE_PATH.profile}
            Component={Profile}
          />
        </Route>
      </Route>,
    ),
  )
