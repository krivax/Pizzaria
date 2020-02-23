import React, { Suspense, lazy, useEffect, useContext, useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { LinearProgress } from '@material-ui/core'
import firebase from './services/firebase'
import { AuthContext } from './contexts/auth'
import t from 'prop-types'

const MainPage = lazy(() => import('./pages/main/main'))
const Login = lazy(() => import('./pages/login/login'))

function App ({ location }) {
  const { userInfo, setUserInfo } = useContext(AuthContext)
  const [didCheckUserIn, setDidCheckUserIn] = useState(false)

  const { isUserLoggedIn } = userInfo

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUserInfo({
        isUserLoggedIn: !!user,
        user: user && {
          ...user,
          firstName: user.displayName
        }
      })
      setDidCheckUserIn(true)
    })
  }, [setUserInfo])

  if (!didCheckUserIn) {
    return <LinearProgress color='secondary' />
  }

  if (isUserLoggedIn && location.pathname === '/login') {
    return <Redirect to='/' />
  }

  if (!isUserLoggedIn && location.pathname !== '/login') {
    return <Redirect to='/login' />
  }

  return (
    <Suspense fallback={<LinearProgress color='secondary' />}>
      <Switch>
        <Route path='/login' component={Login} />
        <Route component={MainPage} />
      </Switch>
    </Suspense>
  )
}

App.propTypes = {
  location: t.object.isRequired
}

export default App
