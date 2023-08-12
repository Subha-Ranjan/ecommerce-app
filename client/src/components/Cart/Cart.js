import "./Cart.scss";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
function Cart() {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto-compress&cs=tinys rgb&w=1600",
      img2: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto-compress&cs=tinysrgb&w=1600",
      title: "Long Sleeve Graphic T-shirt",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, molestias veniam. Officiis minima, distinctio tenetur quo magni aspernatur. Doloribus recusandae rem, itaque ut facilis labore repudiandae exercitationem laboriosam neque dolorum",
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
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, molestias veniam. Officiis minima, distinctio tenetur quo magni aspernatur. Doloribus recusandae rem, itaque ut facilis labore repudiandae exercitationem laboriosam neque dolorum",

      price: 12,
    },
  ];
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item?.desc.substring(0, 25)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteOutlineOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <span className="reset">RESET CART</span>
    </div>
  );
}

export default Cart;
