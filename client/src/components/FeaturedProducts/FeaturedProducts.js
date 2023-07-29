import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
function FeaturedProducts({ type }) {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto-compress&cs=tinys rgb&w=1600",
      img2: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto-compress&cs=tinysrgb&w=1600",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinys rgb&w=1600",
      title: "Coat",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Skirt",
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Hat",
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sed
          iure eaque nam exercitationem, accusamus porro esse! Officia commodi
          repellendus suscipit sint, itaque fugit minus molestias eum sapiente
          sequi laborum perferendis ex nam aliquam cupiditate rem repellat
          tempora iste. Ipsam a qui, necessitatibus magnam consequuntur odio
          quos veritatis ea illo!
        </p>
      </div>
      <div className="bottom">
        {data?.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
