import React from 'react'
import './link.css'

const Link = ({ to, openInNewTab, children }) => (
  <a href={to} target={openInNewTab && '_blank'} className="link">{children}</a>
)

export default Link
