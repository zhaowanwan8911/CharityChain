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
const Register = Loadable({
  loader: () => import('./components/Register/Register'),
  loading: Loading,
})
const RequesterWallet = Loadable({
  loader: () => import('./components/RequesterWallet/RequesterWallet'),
  loading: Loading,
})
const Donator = Loadable({
  loader: () => import('./components/Donator/Donator'),
  loading: Loading,
})
const Recipients = Loadable({
  loader: () => import('./components/Recipients/Recipients'),
  loading: Loading,
})
const RecipientContent = Loadable({
  loader: () => import('./components/RecipientContent/RecipientContent'),
  loading: Loading,
})
const BusinessDetail = Loadable({
  loader: () => import('./components/BusinessDetail/BusinessDetail'),
  loading: Loading,
})

const ChildRoute = () => (
  <div>
    <Route path="*" component={Nav} />
    <Route exact path="/" component={HomePage} />
    <Route exact path="/wallet" component={Wallet} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/requesterwallet" component={RequesterWallet} />
    <Route exact path="/Donator" component={Donator} />
    <Route exact path="/recipients" component={Recipients} />
    <Route exact path="/recipients/1" component={RecipientContent} />
    <Route exact path="/business" component={BusinessDetail} />
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
