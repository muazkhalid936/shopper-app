import React, { useContext } from "react";
import "./ProductDisplay.css";
import star from "../Assets/star_icon.png";
import star_dull from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../context/ShopContext";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Productdisplay = (props) => {
  const { product } = props;

  const { addToCart } = useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="display-left">
        <div className="display-img-list">
          <img src={product.image} />
          <img src={product.image} />
          <img src={product.image} />
          <img src={product.image} />
        </div>

        <div className="display-img">
          <img className="display-main-img" src={product.image} />
        </div>
      </div>

      <div className="display-right">
        <h1>{product.name}</h1>
        <div className="display-right-star">
          <img src={star} />
          <img src={star} />
          <img src={star} />
          <img src={star} />
          <img src={star_dull} />
          <p>(122)</p>
        </div>
        <div className="display-price">
          <div className="display-oldprice">${product.old_price}</div>
          <div className="display-newprice">${product.new_price}</div>
        </div>

        <div className="display-decs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          maximus malesuada orci a blandit. Aliquam tristique nulla libero, sit
          amet lobortis ex rhoncus vel.
        </div>

        <div className="display-size">
          <h1>Select Size</h1>
          <div className="display-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>

        <button
          onClick={() => {
            addToCart(product.id);

            toast.success("Added to cart", {
              position: "bottom-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
            });
          }}
        >
          ADD TO CART
        </button>

        <div className="display-cat">
          <p className="display-cate">
            <span>
              <b>Category:</b>{" "}
            </span>{" "}
            Women, T-Shirt, Crop Top
          </p>

          <p className="display-cate">
            <span>
              <b>Tags:</b>{" "}
            </span>{" "}
            Modern, Latest
          </p>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default Productdisplay;
