import React from 'react'
import PropTypes from 'prop-types'
import Button from "./Button"

const Header = ({ title }) => {
  return (
    <header className="header">
        <h1>{title}</h1>
        <Button color="green" text="refresh"/>
    </header>
  )
}

Header.defaultProps = {
    title: "List"
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header