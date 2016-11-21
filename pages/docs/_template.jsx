import React, { Component, PropTypes } from 'react'
import { withRouter, Link } from 'react-router'
import { NavBar, Row, Col } from 'react-bootstrap'

import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

class DocsTemplate extends Component {
  handleTopicChange = (e) => {
    return this.props.router.push(e.target.value)
  }

  render () {

    const { route, router, children } = this.props
    console.log(route)
    return (
      <Row>
        <Col md={3}>
          <div className='bs-docs-sidebar'>
            <ul className='nav nav-docs'>
              {route.childRoutes.map((it, index) => (
                <li key={index}>
                  <Link to={prefixLink(it.path)}>{it.page.data.title}</Link>
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
  router: PropTypes.object
}

export default withRouter(DocsTemplate)
