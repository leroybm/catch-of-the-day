import React from 'react'
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
  storeInput = React.createRef()

  goToStore = (event) => {
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
        <button type="submit">Visit STore</button>
      </form>
    )
  }
}

export default StorePicker