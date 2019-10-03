import React from 'react'

class EditFishForm extends React.Component {
  handleChange = event => {
    this.props.updateFish(this.props.index, {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  render() {
    return (
      <div className="fish-edit">
        <input
          name="name"
          value={this.props.fish.name}
          onChange={this.handleChange}
          type="text"
        />
        <input
          name="price"
          value={this.props.fish.price}
          onChange={this.handleChange}
          type="text"
        />
        <select
          name="status"
          value={this.props.fish.status}
          onChange={this.handleChange}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          value={this.props.fish.desc}
          onChange={this.handleChange}
        />
        <input
          name="image"
          value={this.props.fish.image}
          onChange={this.handleChange}
          type="text"
        />
        <button onClick={() => this.props.deleteFish(this.props.index)}>
          Delete Fish
        </button>
      </div>
    )
  }
}

export default EditFishForm
