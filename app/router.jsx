import React from 'react'
import { HashRouter, Route, Switch, BrowserHistory } from 'react-router-dom'
import Loadable from 'react-loadable'

const Loading = () => (<div />)
const HomePage = Loadable({
  loader: () => import('./components/HomePage/HomePage'),
  loading: Loading,
})
const Nav = Loadable({
  loader: () => import('./components/Nav/Nav'),
  loading: Loading,
})
const Footer = Loadable({
  loader: () => import('./components/Footer/Footer'),
  loading: Loading,
})
const Wallet = Loadable({
  loader: () => import('./components/Wallet/Wallet'),
  loading: Loading,
})

const ChildRoute = () => (
  <div>
    <Route path="*" component={Nav} />
    <Route exact path="/" component={HomePage} />
    <Route exact path="/wallet" component={Wallet} />
    <Route path="*" component={Footer} />
  </div>
)

const BasicRoute = () => (
  <HashRouter history={BrowserHistory}>
    <div>
      <Switch>
        <Route path="/" component={ChildRoute} />
      </Switch>
    </div>
  </HashRouter>
)

export default BasicRoute
