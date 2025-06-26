import React, { Component } from 'react'

export default class Fooditeam2 extends Component {
  render() {
    const { id, title, price, img, desc } = this.props.allItems;
    return (
      <div>
        <div className="single-food">
          <div className="img">
            <img src={img} alt="" />
          </div>
          <div className="title-price">
            <h3>{title}</h3>
            <p>{price}</p>
          </div>
          <div className="food-desc">{desc.substring(0,200)}...</div>
        </div>
      </div>
    );
  }
}
