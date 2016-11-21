import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'


import { prefixLink } from 'gatsby-helpers'

class IndexPage extends Component {
  render () {
    return (
      <div>
        Home Page
      </div>
    )
  }
}

IndexPage.propTypes = {
  route: PropTypes.object,
}

export default IndexPage
