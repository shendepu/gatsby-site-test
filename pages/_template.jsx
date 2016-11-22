import React, { Component, PropTypes } from 'react'

import { withRouter, Link } from 'react-router'

import { Navbar, Grid, Row, Col } from 'react-bootstrap'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import { getRouteNode, getMatchedPage } from 'utils/functions'

import 'css/style.css'
import 'css/main.css'

class RootTemplate extends Component {
  render () {
    const { route, location: { pathname }, children } = this.props

    let title
    const page = getMatchedPage(location.pathname, route.path, route.indexRoute, route.childRoutes)
    if (page && page.data && page.data.title) title = page.data.title
    title = (title ? title + ' | ' : '') + config.siteTitle

    return (
      <div>
        <Helmet title={title}
          meta={[{ 'name': 'keywords', 'content': page.data.keywords },
                 { 'name': 'description', 'content': page.data.description }]} />
        <header>
          <Navbar inverse className='bs-docs-nav'>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to={prefixLink('/')}>Gatsby Site</Link>
              </Navbar.Brand>
            </Navbar.Header>
            <ul role='navigation' className='nav navbar-nav'>
              {route.childRoutes.map((it, index) => (
                <li key={index} className={pathname.includes(it.path) ? 'active' : ''}>
                  <Link to={it.path}>{getRouteNode(it.path, route.path)}</Link>
                </li>
              ))}
            </ul>
          </Navbar>
        </header>
        <Grid>
          <Row className='show-grid'>
            <Col xs={12} md={12}>
              {children}
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

RootTemplate.propTypes = {
  route: PropTypes.object,
  location: PropTypes.object,
  children: PropTypes.object
}

export default withRouter(RootTemplate)
