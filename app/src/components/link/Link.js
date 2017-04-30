import React from 'react'
import classnames from 'classnames'
import './link.css'

const Link = ({ to, openInNewTab, children, className }) => (
  <a
    href={to}
    target={openInNewTab && '_blank'}
    className={classnames('link', className)}
  >
    {children}
  </a>
)

export default Link
