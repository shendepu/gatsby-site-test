import React, { Component, PropTypes } from 'react'

import { prefixLink } from 'gatsby-helpers'

const BUILD_TIME = new Date().getTime()

class IndexPage extends Component {
  render () {

    let css
    if (process.env.NODE_ENV === 'production') {
      css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />
    }

    return (
      <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Gatsby Site Boilerplate</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.css" />
        {css}
      </head>
      <body>
        <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
        <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
      </body>
      </html>
    )
  }
}

IndexPage.propTypes = {
  body: PropTypes.string
}

export default IndexPage
