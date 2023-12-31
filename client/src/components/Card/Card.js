import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

function Card({ item }) {
  console.log("List Data(isNew):", item);
  return (
    <Link className="link" to={`/product/${item?.id}`}>
      <div className="card">
        <div className="image">
          {item?.attributes?.isNew && <span>New Season</span>}
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item?.attributes?.img?.data?.attributes?.url
            }
            alt=""
            className="mainImg"
          />
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item?.attributes?.img2?.data?.attributes?.url
            }
            alt=""
            className="secondImg"
          />
        </div>
        <h2>{item?.attributes?.title}</h2>
        <div className="prices">
          <h3>₹{item?.attributes?.oldPrice}</h3>
          <h3>₹{item?.attributes?.price}</h3>
        </div>
      </div>
    </Link>
  );
}

export default Card;
