import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const {user} = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const location = useLocation();
  const [,refetch] = useCart();
  const { name, image, price, recipe, _id } = item;
  const handleAddToCart = () => {
    if (user && user.email) {
      //send cart item to the database
      // console.log(user.email, food);
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price
      }

      axiosSecure.post('/carts', cartItem)
      .then(res => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500
          });
          // refetch cart
          refetch();
        }
      })
      
      
    }
    else{
      Swal.fire({
        title: "You Are Not Logged In",
        text: "Please Login To Add To The Cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!"
      }).then((result) => {
        if (result.isConfirmed) {
          // send to the user to the login page
          navigate('/login', {state: {from: location}});
        }
      });
    }
  }
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <p className="absolute right-0  mr-4 mt-4 px-3 bg-slate-900 text-white">
          ${price}
        </p>
        <div className="card-body">
          <h2 className="card-title flex flex-col justify-center items-center">
            {name}
          </h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button 
            onClick={() => handleAddToCart()}
            className="btn btn-outline border-0 border-b-2  mt-6 bg-slate-200 text-[#BB8506] hover:text-[#BB8506]">
              Add TO Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
