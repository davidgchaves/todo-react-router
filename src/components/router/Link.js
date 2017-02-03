import React, { Component } from 'react'

export class Link extends Component {
  static contextTypes = {
    route: React.PropTypes.string,
    linkHandler: React.PropTypes.func
  }

  handleClick = (event) => {
    event.preventDefault()
    this.context.linkHandler(this.props.to)
  }

  render () {
    const activeStyle = this.context.route === this.props.to ? 'active' : ''

    return (
      <a href="#" className={activeStyle} onClick={this.handleClick}>
        {this.props.children}
      </a>
    )
  }
}

const { string } = React.PropTypes
Link.propTypes = {
  to: string.isRequired
}
