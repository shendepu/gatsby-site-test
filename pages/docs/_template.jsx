import React, { Component, PropTypes } from 'react'
import { withRouter, Link } from 'react-router'
import { Row, Col } from 'react-bootstrap'

class DocsTemplate extends Component {
  handleTopicChange = (e) => {
    return this.props.router.push(e.target.value)
  }

  render () {
    const { route, location: { pathname }, children } = this.props
    return (
      <Row>
        <Col md={3}>
          <div className='bs-docs-sidebar'>
            <ul className='nav nav-docs'>
              {route.indexRoute
                ? <li key={10000} className={pathname === route.path ? 'active' : ''}>
                  <Link to={route.path}>{route.indexRoute.page.data.title}</Link>
                </li>
                : null
              }
              {route.childRoutes.map((it, index) => (
                <li key={index} className={pathname.includes(it.path) ? 'active' : ''}>
                  <Link to={it.path}>{it.page.data.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </Col>
        <Col md={9}>
          {children}
        </Col>
      </Row>
    )
  }
}

DocsTemplate.propTypes = {
  route: PropTypes.object,
  location: PropTypes.object,
  router: PropTypes.object,
  children: PropTypes.object
}

export default withRouter(DocsTemplate)
