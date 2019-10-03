import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import Fish from './Fish'
import sampleFishes from '../sample-fishes'
import base from '../base'

class App extends React.Component {
  state = {
    fishes: {},
    orders: {},
  }

  static propTypes = {
    match: PropTypes.object,
  }

  storeId = this.props.match.params.storeId

  componentDidMount() {
    this.setState({
      orders: JSON.parse(localStorage.getItem(this.storeId)) || {},
    })

    this.ref = base.syncState(`${this.storeId}/fishes`, {
      context: this,
      state: 'fishes',
    })
  }

  componentDidUpdate() {
    localStorage.setItem(this.storeId, JSON.stringify(this.state.orders))
  }

  componentWillUnmount() {
    base.removeBinding(this.ref)
  }

  updateFish = (key, fish) => {
    const fishes = { ...this.state.fishes }
    fishes[key] = fish
    this.setState({ fishes })
  }

  deleteFish = key => {
    const fishes = { ...this.state.fishes }
    fishes[key] = null
    this.setState({ fishes })
  }

  createFish = fish => {
    const fishes = { ...this.state.fishes }
    fishes[`fish${Date.now()}`] = fish
    this.setState({ fishes })
  }

  addToOrder = key => {
    const orders = this.state.orders
    orders[key] = orders[key] + 1 || 1
    this.setState({ orders })
  }

  deleteOrder = key => {
    const orders = this.state.orders
    delete orders[key]
    this.setState({ orders })
  }

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          {Object.keys(this.state.fishes).map(key => (
            <Fish
              key={key}
              index={key}
              details={this.state.fishes[key]}
              addToOrder={this.addToOrder}
            />
          ))}
        </div>
        <Order
          fishes={this.state.fishes}
          orders={this.state.orders}
          deleteOrder={this.deleteOrder}
        />
        <Inventory
          createFish={this.createFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
          storeId={this.props.match.params.storeId}
        />
      </div>
    )
  }
}

export default App
