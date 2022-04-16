import { FC, useState } from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'
import Navbar from '../components/Navbar'

import Home from '../pages/Home'

interface RouteItem {
  path: string
  name: string
  Component: FC,
  exact?: boolean
}

export const Routes: RouteItem[] = [
  {
    path: '/',
    name: 'Home',
    Component: Home,
    exact: true,
  },
  {
    path: '*',
    name: 'Home',
    Component: Home,
  },
]

export default () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        {
          Routes.map(({ path, Component, exact }) => 
            <Route key={path} exact={exact ?? false} path={path} component={Component}/>
          )
        }
      </Switch>
    </BrowserRouter>
  )
}