import { useDispatch, useSelector } from "react-redux";
import "./Cart.scss";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { removeItem, resetCart } from "../../redux/cartReducer";

function Cart() {
  // const data = [
  //   {
  //     id: 1,
  //     img: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto-compress&cs=tinys rgb&w=1600",
  //     img2: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto-compress&cs=tinysrgb&w=1600",
  //     title: "Long Sleeve Graphic T-shirt",
  //     desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, molestias veniam. Officiis minima, distinctio tenetur quo magni aspernatur. Doloribus recusandae rem, itaque ut facilis labore repudiandae exercitationem laboriosam neque dolorum",
  //     isNew: true,
  //     oldPrice: 19,
  //     price: 12,
  //   },
  //   {
  //     id: 2,
  //     img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinys rgb&w=1600",
  //     title: "Coat",
  //     isNew: true,
  //     oldPrice: 19,
  //     desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, molestias veniam. Officiis minima, distinctio tenetur quo magni aspernatur. Doloribus recusandae rem, itaque ut facilis labore repudiandae exercitationem laboriosam neque dolorum",

  //     price: 12,
  //   },
  // ];

  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 35)}</p>
            <div className="price">
              {item.quantity} x ₹{item.price}
            </div>
          </div>
          <DeleteOutlineOutlinedIcon
            className="delete"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>₹ {totalPrice()}</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  );
}

export default Cart;
