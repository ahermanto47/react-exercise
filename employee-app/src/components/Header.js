import React from 'react'
import PropTypes from 'prop-types'
import Button from "./Button"

const Header = ({ title, onAdd, showAdd, isAuthenticatedUser }) => {
 
  return (
    <header className="header">
        <h1>{title}</h1>
        {isAuthenticatedUser && <Button color="green" text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>}
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