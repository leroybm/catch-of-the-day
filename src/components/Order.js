import React from 'react'
import { formatPrice } from '../helpers'

class Order extends React.Component {
  renderOrder(order) {
    return (
      <li key={order.key}>
        {order.count} kg {order.name} {formatPrice(order.price)}
      </li>
    )
  }

  render() {
    const orders = Object.keys(this.props.orders)
      .map(key => {
        return { ...this.props.fishes[key], count: this.props.orders[key], key }
      })
      .filter(order => order.status)

    const totalPrice = formatPrice(
      orders.reduce((total, order) => {
        return total + order.count * order.price
      }, 0),
    )

    return (
      <div className="order-wrap">
        <h2>Order!</h2>
        <ul className="order">{orders.map(this.renderOrder)}</ul>
        <div className="total">
          Total:
          <strong>{totalPrice}</strong>
        </div>
      </div>
    )
  }
}

export default Order
