import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ color, text}) => {
  
  function onClick(e) {
    console.log("clicked")
  }
    
  return (
    <div>
        <button
            onClick={onClick} 
            style={{ backgroundColor: color }} 
            className="btn">{ text }
        </button>
    </div>
  )
}



Button.defaultProps = {
    color: "steelblue"
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string
}

export default Button