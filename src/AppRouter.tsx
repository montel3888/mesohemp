// src/AppRouter.tsx

import React, { FunctionComponent, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { withQuicklink } from 'quicklink/dist/react/hoc.js'
import LazyLoad from 'react-lazyload';
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import App from './App'

import Navbar from './components/Navbar/Navbar'

const AboutUs = lazy(() => import('./pages/AboutUs/AboutUs'))
const AboutHemp = lazy(() => import('./pages/AboutHemp/AboutHemp'))
const HempEffects = lazy(() => import('./pages/HempEffects/HempEffects'))
const PrRoom = lazy(() => import('./pages/PrRoom/PrRoom'))
const ContactUs = lazy(() => import('./pages/ContactUs/ContactUs')) 
const Article = lazy(() => import('./components/Article/Article'))
const Product = lazy(() => import('./components/Product/Product'))
const Sitemap = lazy(() => import('./components/Sitemap'))
const NoMatch = lazy(() => import('./components/NoMatch/NoMatch'))
const Footer = lazy(() => import('./components/Footer/Footer'))

const options = {
  origins: []
}
const AppRouter: FunctionComponent = () => {
  return (
    <Router>
      <ScrollToTop />
      <RecoilRoot>
        <Navbar />
        <Suspense fallback={<span>Loading...</span>}>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/about_us" component={withQuicklink(AboutUs, options)} />
            <Route exact path="/about_hemp" component={withQuicklink(AboutHemp, options)} />
            <Route exact path="/hemp_effects" component={withQuicklink(HempEffects, options)} />
            <Route exact path="/pr_room" component={withQuicklink(PrRoom, options)} />
            <Route exact path="/articles/:id" component={withQuicklink(Article, options)} />
            <Route exact path="/contact_us" component={withQuicklink(ContactUs, options)} />
            
            <Route exact path="/sitemap" component={withQuicklink(Sitemap, options)} />

            {/* <Route exact path="/multipurpose_cream" component={withQuicklink(Sitemap, options)} /> */}
            <Redirect from="/multipurpose_cream" to="/revitalising_cream" />

            <Route exact path="/:id" component={withQuicklink(Product, options)} />

            <Route component={withQuicklink(NoMatch, options)} />

          </Switch>
          <Suspense fallback={<div>Loading Footer</div>}>
            <LazyLoad height={200} offset={100} once>
              <Footer />
            </LazyLoad>
          </Suspense>
        </Suspense>
      </RecoilRoot>
    </Router>
  )
}

/*
// TODO EE: To replace Recoil with Redux Toolkit;

import { Provider } from 'react-redux'
import store from './redux/store'

<Router>
  <Provider store={store}>
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  </Provider>
</Router>

 */

/*

// TODO: EE: Without Recoil or Redux Toolkit;

// src/AppRouter.tsx

import React, { FunctionComponent } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'

const AppRouter: FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </Router>
  )
}

 */

export default AppRouter
