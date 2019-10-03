import React from 'react'
import PropTypes from 'prop-types'
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
  static propTypes = {
    history: PropTypes.object,
  }

  storeInput = React.createRef()

  goToStore = event => {
    event.preventDefault()
    this.props.history.push(`/store/${this.storeInput.current.value}`)
  }

  render() {
    return (
      <form action="" className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.storeInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

export default StorePicker
