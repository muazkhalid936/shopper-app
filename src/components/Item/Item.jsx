import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
const Item = (props) => {
  return (

    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0,0)} src={props.image} />
      </Link>

      <p>{props.name}</p>

      <div className="price">
        <span className="new_price">{props.new_price}$</span>
        <span className="old_price">{props.old_price}$</span>
      </div>
    </div>
  );
};

export default Item;
