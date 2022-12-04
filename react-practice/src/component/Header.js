import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <div>
        <br />
        <nav class="navbar navbar-expand-lg navbar-light bg-primary">
      <a class="navbar-brand mx-3" href="#">
        {props.title}
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              TODO List
            </a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  )
}
Header.defaultProps = {
    title: "Default Title"
}
Header.propTypes = {
    title: PropTypes.string
}

export default Header