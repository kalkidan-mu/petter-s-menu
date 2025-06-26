import React, { Component } from "react";
import menu from "../assets/commonResource/data.js";
import Fooditeam2 from "./Fooditeam2.jsx";

export default class AllFoods extends Component {
  render() {
    return (
    <div className="foods-container">
    {menu.map((item)=>{
        // const{id, title, price, img, desc}=item
        return(
            <Fooditeam2 
            key={item.id}
            allItems={item}
            // price={price}
            // img={img}
            // desc={desc}
            />
        )
    })} </div>)
    }
  }
