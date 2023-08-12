import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

function Product() {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const images = [
    "https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto-compress&cs=tinysrgb&w=1600&lazy=load",
    "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinys rgb&w=1600&lazy=load",
  ];
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" srcset="" />
        </div>
      </div>
      <div className="right">
        <h1>Organic Desi Cow Ghee</h1>
        <span>$199</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          reiciendis laboriosam labore exercitationem, dolore quos praesentium
          molestiae neque modi, veniam libero voluptatibus iusto commodi ad
          assumenda pariatur temporibus laborum eius?
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 0 ? 0 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon />
          Add to Cart
        </button>
        <div className="link">
          <div className="item">
            <FavoriteBorderIcon />
            Add to wishlist
          </div>
          <div className="item"></div>
          <BalanceIcon /> Compare Item
        </div>

        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <div className="details">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
}

export default Product;
