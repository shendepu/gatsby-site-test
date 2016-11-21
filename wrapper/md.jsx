import React, { PropTypes } from 'react'
import { config } from 'config'

const MarkdownWrapper = ({ route: { page } }) => (
  <div className="markdown">
    <h1>MarkdownWrapper</h1>
    <h1>{page.data.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: page.data.body }} />
  </div>
)

MarkdownWrapper.propTypes = {
  route: PropTypes.object
}

export default MarkdownWrapper
