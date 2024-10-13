import React, { useContext } from "react";
import "./CSS/ShopCate.css";
import drop_down from "../components/Assets/dropdown_icon.png";
import { ShopContext } from "../context/ShopContext";
import Item from "../components/Item/Item";
const ShopCatergory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-cate">
      <img src={props.banner} className="imgg" />

      <div className="shop-cate-index">
        <p>
          <span>
            <b>Showing 1-12</b>
          </span>{" "}
          out of 36 products
        </p>
        <div className="shop-cate-sort">
          Sort by <img src={drop_down} />
        </div>
      </div>
      <div className="shop-cate-product">
        {all_product.map((item, i) => {
          if (props.category === item.category)
            return (
              <Item
                key={i}
                id={item.id}
                item={item.item}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          else return null;
        })}
      </div>

      <div className="shop-cate-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCatergory;
