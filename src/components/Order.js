import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { formatPrice } from '../helpers'

class Order extends React.Component {
  static propTypes = {
    fishes: PropTypes.object,
    orders: PropTypes.object,
    deleteOrder: PropTypes.func,
  }

  renderOrder = order => {
    return (
      <CSSTransition
        classNames="order"
        key={order.key}
        timeout={{ enter: 250, exit: 250 }}
      >
        <li key={order.key}>
          <span>
            <TransitionGroup component="span" className="count">
              <CSSTransition
                classNames="count"
                key={order.count}
                timeout={{ enter: 500, exit: 500 }}
              >
                <span>{order.count}</span>
              </CSSTransition>
            </TransitionGroup>
            kg {order.name} {formatPrice(order.price)}
          </span>
          <button onClick={() => this.props.deleteOrder(order.key)}>✕</button>
        </li>
      </CSSTransition>
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
        <TransitionGroup component="ul" className="order">
          {orders.map(this.renderOrder)}
        </TransitionGroup>
        <div className="total">
          Total:
          <strong>{totalPrice}</strong>
        </div>
      </div>
    )
  }
}

export default Order
